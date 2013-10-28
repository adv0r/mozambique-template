import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class InjectKeyframes {
	public static final String START_KEYFRAME="<!--Keyframes";
	public static final String END_KEYFRAME="<!--keyframestop-->";
	public static final String SPECIAL_CHAR="$";
	
	public static final String INDENT = "		";
	public static final String DATA0_KEYFRAME_1 = "data-0=\"transform:translate(0%, 0%);\"\n";
	public static final String DATA0_KEYFRAME = "data-0=\"transform:translate(0%, 110%);\"\n";
	public static final String KEYFRAMES_SECTION1 = DATA0_KEYFRAME_1 + 
							INDENT+"data-_pausing1-200p=\"transform:translate(0%, 0%);\"\n"+
							INDENT+"data-_pausing1-300p=\"transform:translate(0%, -100%);\">\n" ;
	
	public static void main (String args[])
	{
		if(args.length!=1)
		{
			System.out.println("Usage : java InjectKeyframes <input_filename>");
			System.exit(0);
		}
		else
		{
			String inputFilePath = args[0];
	
			String inputString = readfromFile(inputFilePath);
	
			String outputString = getInjectedoutput(inputString);
			System.out.println(outputString);
		}
	}

	private static String getInjectedoutput(String inputString) {
		String toReturn = "";
		//Iterate line by line on the string
		BufferedReader bufReader = new BufferedReader(new StringReader(inputString));
		String line=null;
		String lineInsertion ="";
		boolean copyCurrentLine = true;
		int lineNumber=0;
		int delay = 0;
		try {
			while( (line=bufReader.readLine()) != null )
			{
				lineNumber++;
				//System.out.println(lineNumber+" :"+line);
				if(line.contains(END_KEYFRAME))
					copyCurrentLine=true;
				if(copyCurrentLine || delay==1)
				{
					toReturn+=line+"\n";
					delay=0;
				}
				if(!lineInsertion.equals(""))
				{
					//c'è qualcosa nel buffer da inserire
					toReturn+=lineInsertion;
					lineInsertion = "";
				}
				if(line.contains(START_KEYFRAME))
				{
					//La linea corrente è la linea del keyframe start
					//schedule insertion at next line;
					int sectionNumber = Integer.parseInt(line.substring(START_KEYFRAME.length()+1,line.indexOf(SPECIAL_CHAR)));
					lineInsertion=getKeyframes(sectionNumber);
					copyCurrentLine=false;
					delay=1;
				}
				

			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		//System.out.print(toReturn);
		return toReturn;
	}

	private static String getKeyframes(int n) {
		String toReturn="";
		if (n!=1)
		{
			toReturn+=INDENT+DATA0_KEYFRAME;
			toReturn+=INDENT+"data-_offset"+n+"-"+(n-1)+"00p =\"transform:translate(0%, 100%);\""+"\n";
			toReturn+=INDENT+"data-_offset"+n+"-"+(n)+"00p= \"transform:translate(0%, 0%);\""+"\n"; 
			toReturn+=INDENT+"data-_sumoffset"+n+"-"+(n+1)+"00p=\"\"\n";
			toReturn+=INDENT+"data-_sumoffset"+n+"-"+(n+2)+"00p=\"transform:translate(0%, -100%);\">\n";
		}
		else
		{
			toReturn = INDENT+KEYFRAMES_SECTION1;
		}
		return toReturn;	
	}

	private static String readfromFile(String filePath) {
		String toReturn = "";
		try {
			return new Scanner(new File(filePath)).useDelimiter("\\Z").next();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return toReturn;
	}
	
}
