import java.io.FileNotFoundException;
import java.io.PrintWriter;


public class GenerateKeyframes {
	public static final String INDENT = "	";
	public static final String DATA0_KEYFRAME_1 = "data-0=\"transform:translate(0%, 0%);\"\n";
	public static final String DATA0_KEYFRAME = "data-0=\"transform:translate(0%, 100%);\"\n";
	public static final String KEYFRAMES_SECTION1 = DATA0_KEYFRAME_1 + 
							INDENT+"data-_pausing1-100p=\"transform:translate(0%, 0%);\"\n"+
							INDENT+"data-_pausing1-200p=\"transform:translate(0%, -150%);\n" ;

	public static void main (String[] a)
	{
		if(a.length!=1)
		{
			System.out.println("Usage : java GenerateKeyframes <howmany>");
		}
		String toPrint="";
		int howmany=Integer.parseInt(a[0]);
		for (int i=1;i<=howmany;i++)
		{
			toPrint+="------------- SECTION "+i+" start -------------\n";
			toPrint+=computeExternalKeyframes(i);
			toPrint+="------------- SECTION "+i+" end -------------\n\n\n";

		}
		System.out.println(toPrint);

	}
	
	
	public static String computeExternalKeyframes(int n)
	{
		String toReturn=""; 
		if (n!=1)
		{
			toReturn+=INDENT+DATA0_KEYFRAME;
			toReturn+=INDENT+"data-_offset"+n+"-"+(n-1)+"00p =\"transform:translate(0%, 100%);\""+"\n";
			toReturn+=INDENT+"data-_offset"+n+"-"+(n)+"00p= \"transform:translate(0%, 0%);\""+"\n"; 
			toReturn+=INDENT+"data-_sumoffset"+n+"-"+(n+1)+"00p=\"\"\n";
			toReturn+=INDENT+"data-_sumoffset"+n+"-"+(n+2)+"00p=\"transform:translate(0%, -150%);\"\n";
		}
		else
		{
			toReturn = INDENT+KEYFRAMES_SECTION1;
		}
		return toReturn;	
	}
}
