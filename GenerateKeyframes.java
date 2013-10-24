import java.io.FileNotFoundException;
import java.io.PrintWriter;


public class GenerateKeyframes {
	public static final String DATA0_KEYFRAME = "data-0='transform:translate(0%, 0%);\n";
	public static final String KEYFRAMES_SECTION1 = DATA0_KEYFRAME+
												    "data-_pausing1-100p='transform:translate(0%, 0%);'\n"+
												    "data-_pausing1-200p='transform:translate(0%, -150%);\n" ;

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
		String toReturn="KEYFRAMES_SECTION1";
		if (n!=1)
		{
			toReturn+="data-_pausingCumulative"+n+"-"+(n-1)+"00p ='transform:translate(0%, 100%);'"+"\n";
			toReturn+="data-_pausingCumulative"+n+"-"+(n)+"00p 'transform:translate(0%, 0%);'"+"\n"; 
			toReturn+="data-_pausingSum"+n+"-"+(n+1)+"00p=''"+"\n";
			toReturn+="data-_pausingSum"+n+"-"+(n+2)+"00p='transform:translate(0%, -150%);"+"\n";
		}
		else
		{
			toReturn = KEYFRAMES_SECTION1;
		}
		return toReturn;	
	}
}
