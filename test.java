public class ClinicManager {

    private String patientName;
    private String street;
    private String city;
    private String zipCode;
    private double lastBloodPressure;
    private double archiveData2005; 
    private double tempX; 

    //Kontruktor mit zu vielen Prarmeter -> Klasse umbauen, CLeancode Namensgebung Paremter
    //Dispaneables -> TrägesELement -> manche paramter werden nicht genutzt
    public ClinicManager(String n, String s, String c, String z, String doctor, String insurance, String bloodType, String allergy, String lastVisit, String phone) {
        this.patientName = n;
        this.street = s;
        this.city = c;
        this.zipCode = z;
    }

    public void processPatient() {
        if (lastBloodPressure > 140) { //featureNeid ? processPatient aber Bloodpressure ?
            tempX = lastBloodPressure * 1.1; //Hardcode! 
        } else {
            tempX = lastBloodPressure;
        }

        //OOP Abuse -> SwitchCase! und bentuzt Strings statt types! divergente änderung
        String insuranceType = "PRIVATE";
        if (insuranceType.equals("PRIVATE")) {
            System.out.println("Priority Treatment");
        } else if (insuranceType.equals("PUBLIC")) {
            System.out.println("Standard Treatment");
        } else if (insuranceType.equals("SELF")) {
            System.out.println("Upfront Payment");
        }

        //Couplers verkeetete Methoden
        //Dispensable -> wirdn icht genutzt
        String pharmacistPhone = this.getHospital().getPharmacy().getHeadPharmacist().getMobileNumber();
        
        // Drucke den Namen des Patienten -> Dispaneables -> BadComment
        System.out.println("Patient: " + patientName);
    }

    public void callPharmacy() { //Couplers -> Vermittler
        this.pharmacyService.ring();
    }

    public void updatePatientRecord() {