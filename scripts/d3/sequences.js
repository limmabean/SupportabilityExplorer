

// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 180, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  "end": "#FFFFFF",
  "Customer service" : "#FF7B65",
  "Account management" : "#CC6452",
    "Autodesk Account management" : "#CC6452",
      "Account information update" : "#CC6452",
        "Change company name or address" : "#CC6452",
          "Change company address" : "#CC6452",
            "Company address correction" : "#CC6452",
            "Shipto address change" : "#FF7B65",
              "Ship to doesn't match PO" : "#CC6452",
          "Change company name" : "#FF7B65",
            "Company name correction" : "#FFAD9E",
        "Individual contact update" : "#FF7B65",
          "Contact name update" : "#FFAD9E",
            "Contact already exists" : "#FFDFD9",
          "Email update" : "#FFDFD9",
            "Incorrect email" : "#FFEFEC",
            "UserID already in use" : "#FF7B65",
          "Phone number update" : "#FFEFEC",
            "Incorrect phone number" : "#9D4B3D",
      "Account modification" : "#FF7B65",
        "Account creation" : "#FFAD9E",
          "Account creation issues" : "#FF7B65",
            "Account activation email not received" : "#CC6452",
        "Account deletion" : "#FFDFD9",
        "Account name change" : "#FFEFEC",
        "Linking accounts" : "#FF7B65",
        "Merge accounts" : "#9D4B3D",
          "Duplicate account" : "#9D4B3D",
      "Signin help" : "#FFAD9E",
        "Change username" : "#CC6452",
        "How to signin into account" : "#FF7B65",
        "Password reset" : "#FFAD9E",
          "Forgot password" : "#CC6452",
          "Login and password request" : "#FF7B65",
          "Password reset not received" : "#FFAD9E",
          "Reset password link expired" : "#FFDFD9",
        "Signin issues" : "#FFDFD9",
          "Account Configuration has Failed" : "#FFEFEC",
          "Bim 360 login failed" : "#FF7B65",
          "Error #111" : "#9D4B3D",
          "Error o2err002 or 003" : "#CC6452",
          "Error: You are already signed in" : "#FF7B65",
          "Login screen loops back" : "#FFAD9E",
          "Oops an error occurred" : "#FFDFD9",
          "Username issues" : "#FFEFEC",
            "Please verify that this Autodesk ID is associated with" : "#FF7B65",
            "Revit Username Must Match Autodesk ID" : "#FFAD9E",
            "Unknown username" : "#FFDFD9",
            "Verify email required" : "#FFEFEC",
          "You have logged in as a different user than was invited" : "#FF7B65",
    "Contract management" : "#FF7B65",
      "Contract consolidation" : "#FFDFD9",
      "Contract information" : "#FFEFEC",
        "Contract number information" : "#FFEFEC",
        "Reseller information in account" : "#FF7B65",
      "Contract issues" : "#FF7B65",
        "Stays on trial" : "#9D4B3D",
          "Cannot convert to education license" : "#9D4B3D",
    "Help with report views" : "#FFAD9E",
      "Cloud credit report" : "#9D4B3D",
      "Contract details report help" : "#CC6452",
      "Subscription" : "#FF7B65",
        "Renewal report help" : "#CC6452",
          "Missing subscription" : "#CC6452",
            "renewal report" : "#FF7B65",
    "How to get phone or Web support?" : "#FFDFD9",
      "Phone support access" : "#FFAD9E",
        "Assigning phone support" : "#FF7B65",
        "Phone support number request" : "#FFAD9E",
        "Phone support unavailable" : "#FFDFD9",
      "Web support access" : "#FFDFD9",
        "Assigning Web support" : "#FFEFEC",
        "Case creation and viewing help" : "#FF7B65",
          "Hello! Error" : "#FF7B65",
        "Chat access" : "#9D4B3D",
          "Chat access issues" : "#FFAD9E",
        "Web support access issues" : "#CC6452",
    "My account training" : "#FFEFEC",
    "Product information in account" : "#FF7B65",
      "Cloud credit issues" : "#FFEFEC",
        "Cloud credit access issues" : "#FF7B65",
        "Expired cloud credits" : "#FFAD9E",
        "Missing cloud credits" : "#FFDFD9",
      "How to manage device" : "#FF7B65",
      "License information" : "#9D4B3D",
        "Expiration date information" : "#FFEFEC",
        "License user information" : "#FF7B65",
        "Seat count information" : "#9D4B3D",
        "Serial number request" : "#CC6452",
          "Missing serial number" : "#FFDFD9",
      "Missing product in account" : "#CC6452",
        "Error: Not all Products & Services are available at this moment" : "#FF7B65",
        "Missing device in account" : "#FFAD9E",
        "Missing download in account" : "#FFDFD9",
        "Missing license information" : "#FFEFEC",
          "serial number in account" : "#FFEFEC",
        "Missing version in account" : "#FF7B65",
        "Products and services are missing from your account" : "#9D4B3D",
    "Support level purchase" : "#9D4B3D",
    "User management" : "#CC6452",
      "Adding or removing users" : "#FF7B65",
        "Adding new users" : "#CC6452",
          "activerecord.attributes.user.hq_identifier has already been taken" : "#FF7B65",
          "User already exists" : "#9D4B3D",
          "Welcome kit not received" : "#CC6452",
        "Removing users" : "#FF7B65",
      "Change SC or CM" : "#FFAD9E",
        "Change contract manager" : "#FFAD9E",
        "Change software coordinator" : "#FFDFD9",
      "User permissions" : "#FFDFD9",
        "Cloud credit permissions and transfers" : "#FFEFEC",
        "How to set permissions" : "#FF7B65",
        "User permission issues" : "#9D4B3D",
          "Download permission" : "#FF7B65",
          "Error: Signin as a different user" : "#FFAD9E",
            "Contact administrator to request permission to use this product" : "#9D4B3D",
          "Issues assigning to user" : "#FFDFD9",
          "Pending user status" : "#FFEFEC",
          "Software access issues" : "#FF7B65",
          "The user is using this email address for another account" : "#9D4B3D",
          "There was an error with your request" : "#CC6452",
          "You do not have access to this cloud service" : "#FF7B65",
          "You have not purchased the Collaboration for Revit service" : "#FFAD9E",
          "Your Autodesk Account is not entitled for" : "#FFDFD9",
  "Email verification request" : "#FF7B65",
    "Verify email issues" : "#FF7B65",
  "License management" : "#FFAD9E",
    "Change deployment type" : "#FFAD9E",
    "General license question" : "#FFDFD9",
      "Crossplatform license" : "#FFEFEC",
      "License agreement" : "#FF7B65",
      "License file question" : "#9D4B3D",
      "Maintenance license information" : "#CC6452",
      "Network license general information" : "#FF7B65",
        "Cascade licensing and borrowing" : "#CC6452",
          "Cascading license" : "#FFEFEC",
          "License borrowing" : "#FF7B65",
      "NFR license" : "#FFAD9E",
      "Piracy" : "#FFDFD9",
      "Standalone license general information" : "#FFEFEC",
        "Multiseat standalone license" : "#FF7B65",
    "HULA" : "#FFEFEC",
    "License report request" : "#FF7B65",
      "License compliance" : "#FF7B65",
    "Other license changes" : "#9D4B3D",
      "License expiration date update" : "#9D4B3D",
      "License extension" : "#CC6452",
        "Trial extension request" : "#FFAD9E",
      "License reservation" : "#FF7B65",
      "Serial number update" : "#FFAD9E",
      "Serial number upgrade" : "#FFDFD9",
    "Previous version request" : "#CC6452",
      "CreatePreviousVersionAsset" : "#FFEFEC",
        "CreatePreviousVersionAsset : SFDCCUSTMNOPVSKU" : "#FFDFD9",
    "Reseller assignment change" : "#FF7B65",
    "Seat update" : "#FFAD9E",
      "Add seats" : "#FF7B65",
        "Missing seats" : "#FFEFEC",
      "Merge seats" : "#9D4B3D",
      "Split seats" : "#CC6452",
    "Transfer of License" : "#FFDFD9",
      "Transfer license ownership" : "#FF7B65",
      "Transfer license to new computer" : "#FFAD9E",
        "License Transfer Utility" : "#FF7B65",
          "License Transfer Utility issues" : "#9D4B3D",
            "License export error" : "#CC6452",
              "Error 17.1.88" : "#FF7B65",
                "84" : "#CC6452",
                  "" : "#CC6452",
              "Export Request Failed" : "#FFAD9E",
                "Error reference:36" : "#FF7B65",
                "Error reference:44" : "#FFAD9E",
            "License transfer is not supported" : "#FF7B65",
        "Portable License Utility" : "#9D4B3D",
"Downloads, Installation, Activation & Registration" : "#1957A8",
  "Activation & Registration" : "#144687",
    "Activation & registration information" : "#144687",
      "Activation report request" : "#144687",
      "Manual" : "#1957A8",
        "Offline activation" : "#144687",
      "Online activation instructions" : "#5987C2",
      "Product key request" : "#D1DDEE",
      "Reactivation request" : "#E3EAF4",
      "Unregistration" : "#1957A8",
        "Deactivation help" : "#1957A8",
    "Activation & registration issues" : "#1957A8",
      "Activate button disabled" : "#0D3160",
      "Activation code request" : "#144687",
        "Activation code issues" : "#5987C2",
          "Activation code not valid" : "#144687",
          "Error 800c0008" : "#1957A8",
          "Issues generating activation code" : "#5987C2",
      "Activation issues with no error" : "#1957A8",
      "Activation loop" : "#5987C2",
        "Activation code loop" : "#D1DDEE",
        "Activation requires or loops on serial number" : "#E3EAF4",
        "Multiple activation emails" : "#1957A8",
      "Autodesk component has stopped working" : "#D1DDEE",
      "Blank screen during activation" : "#E3EAF4",
      "Error 0010.15" : "#1957A8",
      "Error 0015.111" : "#0D3160",
      "Error 0015.301" : "#144687",
      "Error 01" : "#1957A8",
      "Error 10" : "#5987C2",
      "Error 201" : "#D1DDEE",
      "Error 202" : "#E3EAF4",
      "Error 41 Import Request Failed" : "#1957A8",
      "Error 46" : "#0D3160",
      "Error: The system has encountered a problem" : "#144687",
      "Expired activation link" : "#1957A8",
      "HPDIA0200W Authentication failed" : "#5987C2",
      "Product activation email not received" : "#D1DDEE",
      "Product key issues" : "#E3EAF4",
        "Error 0012.110" : "#0D3160",
        "Invalid product key" : "#144687",
        "Product key not associated with serial number" : "#1957A8",
      "Request code issues" : "#1957A8",
        "Request code changed" : "#5987C2",
        "Request code invalid" : "#D1DDEE",
        "Request code missing" : "#E3EAF4",
      "Serial number & license activation issues" : "#0D3160",
        "Checking license hangs or crashes" : "#1957A8",
        "CLic Licensing issues" : "#0D3160",
          "A licensing error occurred that Autodesk systems were not able to handle for you" : "#D1DDEE",
          "CLic asks for serial number" : "#E3EAF4",
          "CLIC Error = 1" : "#1957A8",
          "CLIC Error = 4002" : "#0D3160",
          "Error 4002" : "#144687",
          "Error RE3100" : "#1957A8",
          "Error RE3107" : "#5987C2",
        "Error 7" : "#144687",
        "Error code 110" : "#1957A8",
        "Expired license" : "#5987C2",
          "Expiration date issues" : "#D1DDEE",
          "Expired subscription" : "#E3EAF4",
          "Expired trial" : "#1957A8",
            "0 days left message" : "#144687",
            "Your trial has ended" : "#1957A8",
          "The product you are trying to activate has expired" : "#0D3160",
        "Export controls block" : "#D1DDEE",
        "FATAL ERROR: Unhandled e06d7363h Exception" : "#E3EAF4",
        "License status [1.1.0]" : "#1957A8",
        "Licensing error" : "#0D3160",
          "Licensing Error Establish an Internet connection to continue" : "#144687",
          "Licensing Error Please contact Autodesk Customer Support" : "#1957A8",
        "Processing error" : "#144687",
          "Activation error 400" : "#5987C2",
        "Serial number issues" : "#1957A8",
          "Corrupted license" : "#D1DDEE",
          "Duplicate serial number" : "#E3EAF4",
          "Error #12" : "#1957A8",
          "Error 123" : "#0D3160",
          "Error 2 Licensing System" : "#144687",
          "Error: Renew Your License" : "#1957A8",
          "Inactive serial number" : "#5987C2",
          "License already in use" : "#D1DDEE",
          "No serial number needed  just sign in" : "#E3EAF4",
          "Returned serial number" : "#1957A8",
          "This email isn't associated with this serial number" : "#0D3160",
          "Unregistered license" : "#144687",
          "Wrong serial number" : "#1957A8",
            "Invalid serial number" : "#5987C2",
              "Error: Your license is invalid" : "#144687",
            "Serial number too long" : "#D1DDEE",
        "System clock error" : "#5987C2",
          "Check that your system clock is set to the current date and time before you try again" : "#5987C2",
      "Thanks for initiating your product activation" : "#144687",
      "Unauthorized activation" : "#1957A8",
      "Your online activation request could not be processed" : "#5987C2",
      "Your online activation request has returned an error (800c0005)" : "#D1DDEE",
      "Your online activation request has timed out" : "#E3EAF4",
  "Downloads & Upgrades" : "#1957A8",
    "Accessing download" : "#5987C2",
      "Download access issues" : "#1957A8",
        "Browser Download access issues" : "#D1DDEE",
        "Download button unavailable" : "#E3EAF4",
        "Download Now access issues" : "#1957A8",
        "Install Now access issues" : "#0D3160",
      "Download request" : "#0D3160",
        "Download instructions" : "#144687",
        "Download link request" : "#1957A8",
          "HTTP Error 404: NOT FOUND" : "#D1DDEE",
          "Trial download request" : "#E3EAF4",
        "Language pack download" : "#5987C2",
        "Offline installer request" : "#D1DDEE",
        "Redownload request" : "#E3EAF4",
        "Virtual Agent download access" : "#1957A8",
    "Download issues" : "#D1DDEE",
      "Autodesk SelfExtract issues" : "#144687",
      "Browser Download issues" : "#1957A8",
        "Browser Download popup issues" : "#0D3160",
      "Download communication failure" : "#5987C2",
      "Download Manager issues" : "#D1DDEE",
      "Download Now issues" : "#E3EAF4",
      "Download Server Not Responding" : "#1957A8",
      "Error 0x25000001" : "#0D3160",
      "Error 0x250000ff" : "#144687",
      "Error 8" : "#1957A8",
      "Error 9" : "#5987C2",
      "Install Now issues" : "#D1DDEE",
        "Error message requiring Install Now" : "#144687",
        "Something is preventing the software from launching" : "#1957A8",
      "Missing file (Download)" : "#E3EAF4",
        "Product download consists of multiple files, At least one file is missing or has not been downloaded yet" : "#5987C2",
      "No active or pending downloads" : "#1957A8",
      "Redownload issues" : "#0D3160",
      "Slow download" : "#144687",
      "Windows cannot find Setup.exe" : "#1957A8",
    "Extension & Enhancement" : "#E3EAF4",
      "Product enhancements access" : "#5987C2",
        "Addon download" : "#D1DDEE",
        "Service pack access" : "#E3EAF4",
      "Product extension access" : "#D1DDEE",
    "Request upgrade" : "#1957A8",
      "Upgrade information" : "#E3EAF4",
  "Installation & Configuration" : "#5987C2",
    "Deployment configuration" : "#0D3160",
      "Deployment creation" : "#1957A8",
      "Deployment issues" : "#0D3160",
      "Deployment modification" : "#144687",
    "Installation" : "#144687",
      "Installation general questions" : "#1957A8",
        "Installation instructions" : "#1957A8",
        "Language selection" : "#0D3160",
        "Multiple computer installation" : "#144687",
        "Reinstallation help" : "#1957A8",
          "New computer installation " : "#1957A8",
            " reinstallation" : "#E3EAF4",
        "Silent installation" : "#5987C2",
        "Subscription installation" : "#D1DDEE",
        "Trial license installation" : "#E3EAF4",
        "Uninstall information" : "#1957A8",
          "Clean install and uninstall information" : "#0D3160",
          "Silent uninstall information" : "#144687",
      "Installation issues" : "#5987C2",
        ".Net issues" : "#0D3160",
          "Error 0x800F081F" : "#1957A8",
          "Error: .NET 4.* is not installed" : "#5987C2",
          "Install .NET Framework Language Pack Failed Installation aborted Result=1603" : "#D1DDEE",
        "adSSO error" : "#144687",
        "Allied products not found" : "#1957A8",
        "Assembly install error" : "#5987C2",
        "C installation issues" : "#D1DDEE",
          "Entry point not found" : "#E3EAF4",
          "Error 1918" : "#1957A8",
        "Can only be installed on System drive formatted with journaled HFS+" : "#E3EAF4",
        "Certificate installation issues" : "#1957A8",
          "Error 26352" : "#0D3160",
          "Signature could not be verified" : "#144687",
        "Corrupted preinstall" : "#0D3160",
        "Decompressing failed" : "#144687",
        "Deployment installation issues" : "#1957A8",
        "DLL issues" : "#5987C2",
          "acadres.dll error" : "#1957A8",
            "Problem loading acadltres.dll resource file" : "#1957A8",
          "AcBrandRes.dll error" : "#5987C2",
          "apimswincrtruntimel110.dll error" : "#D1DDEE",
          "Error 2337" : "#E3EAF4",
          "Failed to initialize addin" : "#1957A8",
          "MSVCP140.dll missing" : "#0D3160",
          "MSVCR110.dll error" : "#144687",
          "Ntdll.dll error" : "#1957A8",
        "Errno errors" : "#D1DDEE",
          "Errno 11001" : "#5987C2",
          "Errno 13 Permission denied" : "#D1DDEE",
          "Errno 2" : "#E3EAF4",
          "Errno 8" : "#1957A8",
        "Error 0xc0000*" : "#E3EAF4",
          "Error 0xc000007b" : "#0D3160",
          "The application was unable to start correctly (0xc0000142)" : "#144687",
        "Error 1: 5 2: Failed to install" : "#1957A8",
          "uninstall the anchor service" : "#1957A8",
        "Error 2381" : "#0D3160",
        "Error 25531 Failed to open XML" : "#144687",
        "First Run Initialization" : "#1957A8",
        "Graphic card issues" : "#5987C2",
          "Could not initialize the graphic device" : "#5987C2",
          "DirectX issues" : "#D1DDEE",
            "Install DirectX Runtime Failed Failure is ignored, Result=1619" : "#0D3160",
          "OpenGL issues" : "#E3EAF4",
          "Software uses wrong graphics card" : "#1957A8",
          "Unsupported graphics hardware" : "#0D3160",
        "Incompatible File System!" : "#D1DDEE",
        "Install button greyed out" : "#E3EAF4",
        "Installation hangs" : "#1957A8",
        "Installation internet connection error" : "#0D3160",
          "Connection has expired" : "#144687",
          "Establish an internet connection to continue" : "#1957A8",
          "Please check your Internet connection and try again" : "#5987C2",
          "This session has timed out" : "#D1DDEE",
        "Installation script error" : "#144687",
          "An error has occurred in the script on this page" : "#E3EAF4",
          "xmsgProductLanguage is undefined" : "#1957A8",
        "Installation Unknown Error" : "#1957A8",
        "Installer issues" : "#5987C2",
          "Application Manager issues" : "#0D3160",
            "Error: Unable to run Application Manager" : "#144687",
          "Desktop App issues" : "#144687",
          "Installation crash" : "#1957A8",
            "Internal failure" : "#1957A8",
          "Run Setup.exe to install" : "#5987C2",
        "Language pack installation issues" : "#D1DDEE",
        "Libraries installation issues" : "#E3EAF4",
          "The media does not contain content and will be downloaded during installation" : "#D1DDEE",
        "NetSession issues" : "#1957A8",
        "Operating system unsupported" : "#0D3160",
        "Parallels issues" : "#144687",
        "Product is already installed" : "#1957A8",
        "Program will not open after installation" : "#5987C2",
        "Run Setup.exe to install error" : "#D1DDEE",
        "Setup initialization error" : "#E3EAF4",
        "Some products failed to install" : "#1957A8",
        "SQL installation issues" : "#0D3160",
          "SQL Server connection issues" : "#E3EAF4",
        "System cannot open the device or file specified" : "#144687",
        "The application has failed to start because its sidebyside configuration is incorrect" : "#1957A8",
        "The system cannot open the device or file specified" : "#5987C2",
        "Uninstallation issues" : "#D1DDEE",
        "Upgrade issues" : "#E3EAF4",
          "The update could not be installed because the expected Autodesk product could not be located on your computer" : "#1957A8",
        "Windows installer errors" : "#1957A8",
          "Error 0x80070643" : "#0D3160",
          "Error 1303" : "#144687",
          "Error 1304" : "#1957A8",
          "Error 1306" : "#5987C2",
          "Error 1307" : "#D1DDEE",
          "Error 1308" : "#E3EAF4",
            "1311" : "#5987C2",
          "Error 1309" : "#1957A8",
          "Error 1310" : "#0D3160",
          "Error 1317" : "#144687",
          "Error 1321" : "#1957A8",
          "Error 1325" : "#5987C2",
          "Error 1326 Error getting file security" : "#D1DDEE",
          "Error 1328" : "#E3EAF4",
          "Error 1335" : "#1957A8",
          "Error 1601" : "#0D3160",
          "Error 1603" : "#144687",
          "Error 1605" : "#1957A8",
          "Error 1609" : "#5987C2",
          "Error 1618" : "#D1DDEE",
          "Error 1619" : "#E3EAF4",
          "Error 1642" : "#1957A8",
          "Error 1704" : "#0D3160",
          "Error 1712" : "#144687",
          "Error 1719" : "#1957A8",
          "Error 1720" : "#5987C2",
          "Error 1721" : "#D1DDEE",
          "Error 1722" : "#E3EAF4",
          "Error 1723" : "#1957A8",
          "Error 1904" : "#0D3160",
          "Error 1905" : "#144687",
          "Error 1920" : "#1957A8",
          "Error 1935" : "#5987C2",
          "Error 1946" : "#D1DDEE",
          "Error 2203" : "#E3EAF4",
          "Error 2343" : "#1957A8",
          "Error 2738" : "#0D3160",
          "Error 2753" : "#144687",
          "Installation path issues" : "#1957A8",
            "Error 1324" : "#D1DDEE",
            "Invalid configuration path" : "#E3EAF4",
            "The system cannot find the path specified" : "#1957A8",
          "Please wait while windows configures" : "#5987C2",
          "Registry key error" : "#D1DDEE",
            "Error 1327" : "#0D3160",
            "Error 1402" : "#144687",
              "1406" : "#1957A8",
            "Error 1606" : "#1957A8",
            "Error 997" : "#5987C2",
        "Windows system errors" : "#0D3160",
          "WinError 10060" : "#E3EAF4",
          "WinError 10061" : "#1957A8",
          "WinError 5" : "#0D3160",
          "WinError 740" : "#144687",
        "Your product is not found on this computer" : "#144687",
    "License installation & configuration" : "#1957A8",
      "Desktop subscription licensing" : "#D1DDEE",
      "License installation issues" : "#E3EAF4",
        "Error 1 Licensing System" : "#1957A8",
        "Error 9 Licensing System" : "#5987C2",
        "Error S1055" : "#D1DDEE",
        "License file issues" : "#E3EAF4",
          "Missing license file" : "#1957A8",
        "License transfer issues" : "#1957A8",
                "Error reference: 1" : "#144687",
                "Error reference: 40" : "#1957A8",
          "Portable License Utility issues" : "#5987C2",
        "Network license issues" : "#0D3160",
          "Cascading license issues" : "#D1DDEE",
          "Error 4003" : "#E3EAF4",
          "Floating license issues" : "#1957A8",
          "License borrowing issues" : "#0D3160",
          "License server issues" : "#144687",
            "Cannot start license server" : "#D1DDEE",
              "Error 104 Unable to Initialize adlm" : "#5987C2",
              "Error 30" : "#D1DDEE",
              "Not a valid server hostname exiting" : "#E3EAF4",
              "The license manager is not functioning or is improperly installed" : "#1957A8",
              "The security system (Softlock license manager) is not functioning or is improperly installed" : "#0D3160",
              "VD is starting Please check vendor daemon's status in debug log" : "#144687",
            "Flexnet errors" : "#E3EAF4",
              "Error 1,359" : "#1957A8",
              "Error 1.359.2" : "#5987C2",
              "Error 125,147" : "#D1DDEE",
              "Error 15" : "#E3EAF4",
                "Error 15.10" : "#5987C2",
                  "Error 15.10.10061" : "#144687",
              "Error 204" : "#1957A8",
              "Error 25" : "#0D3160",
              "Error 97,121" : "#144687",
              "Error 99998" : "#1957A8",
              "Flexnet error 1.5.*" : "#5987C2",
                "Error 1.5.124" : "#D1DDEE",
                "Feature code error" : "#E3EAF4",
              "FlexNet License Finder issues" : "#D1DDEE",
                "FLEXnet License Finder dialog box appears when you try to start program" : "#1957A8",
              "Invalid host error" : "#E3EAF4",
              "Invalid license key (inconsistent authentication code)" : "#1957A8",
              "Update DACL failed" : "#0D3160",
              "Valid license could not be obtained" : "#144687",
                "Error 0.0.0" : "#0D3160",
                "Error 15.570.0" : "#144687",
                "Error 20 License was not obtained" : "#1957A8",
                "Error 4" : "#5987C2",
                "Error 5.412.0" : "#D1DDEE",
                "Error 5.414.0" : "#E3EAF4",
                "Error 96" : "#1957A8",
                  "Error 96.491" : "#1957A8",
                  "Error 96.7.11001" : "#5987C2",
                "Message: Unable to obtain licence" : "#0D3160",
            "License server system does not support this feature" : "#1957A8",
            "Network license crash" : "#0D3160",
            "Security issues" : "#144687",
              "A security failure has occurred" : "#1957A8",
              "POODLE SSL v3 vulnerability" : "#5987C2",
            "Server can't pull license" : "#1957A8",
              "Error: Failed to acquire license" : "#D1DDEE",
              "Error: Failed to retrieve a licence" : "#E3EAF4",
              "License is no longer available" : "#1957A8",
              "License not found" : "#0D3160",
                "Error 5.357.0" : "#144687",
              "Unable to reach license server" : "#144687",
                "Networking Error: Server (*) not responding" : "#1957A8",
                "The Autodesk license server cannot be found" : "#5987C2",
          "License timeout issues" : "#1957A8",
          "No more available licenses" : "#5987C2",
            "Error 4.132.0" : "#5987C2",
          "The network license is not available" : "#D1DDEE",
        "Standalone license issues" : "#144687",
          "Error 157.424.0" : "#E3EAF4",
          "License status [5.2.2]" : "#1957A8",
        "We're sorry we cannot provide you with your license details at this time" : "#1957A8",
      "Network license installation and configuration" : "#1957A8",
        "Flexnet feature code request" : "#5987C2",
        "How to find hostname and physical address" : "#D1DDEE",
        "How to uninstall Network License Manager" : "#E3EAF4",
        "License file request" : "#1957A8",
          "License file creation" : "#0D3160",
        "Network license installation" : "#0D3160",
          "New license server installation" : "#144687",
        "Options files configuration" : "#144687",
          "Setting a License Inactivity Timeout" : "#1957A8",
      "Standalone license installation and configuration" : "#0D3160",
    "Security settings" : "#5987C2",
      "Antivirus configuration" : "#144687",
        "Antivirus issues" : "#1957A8",
        "Virus alerts" : "#5987C2",
      "Firewall configuration" : "#1957A8",
        "Firewall information" : "#D1DDEE",
        "Firewall issues" : "#E3EAF4",
          "System Error Repair" : "#5987C2",
      "Proxy server configuration" : "#5987C2",
    "Uninstallation" : "#D1DDEE",
      "Deployment uninstallation" : "#D1DDEE",
"Learning" : "#98610F",
  "Learning how to use product" : "#CC6452",
    "Best practices" : "#CC6452",
    "Getting Started" : "#FF7B65",
    "Online help documentation" : "#FFAD9E",
    "Sample files" : "#FFDFD9",
    "Tutorials" : "#FF7B65",
    "User guide" : "#9D4B3D",
"Sales (PrePost)" : "#0ED3BE",
  "Order management" : "#0CA899",
    "Agreement change" : "#0CA899",
    "Billing (order management)" : "#0ED3BE",
      "Credit or debit" : "#0CA899",
        "Credit request" : "#0CA899",
          "Tax credit adjustment" : "#0CA899",
        "Price correction" : "#0ED3BE",
      "Invoice issues" : "#0ED3BE",
        "Duplicate invoice" : "#5CE1D3",
      "Invoice request" : "#5CE1D3",
        "Missing invoice" : "#BBF3ED",
        "VAT invoice request" : "#0ED3BE",
      "Price adjustment" : "#BBF3ED",
        "10 day waiver" : "#0A8378",
      "Sales fee" : "#0ED3BE",
        "Service fee" : "#0CA899",
    "DDWS help" : "#5CE1D3",
      "DDWS failure" : "#0A8378",
        "Error in SALES_ITEM_IN" : "#0ED3BE",
        "Input data invalid Account SN" : "#5CE1D3",
    "Digital supply chain fulfillment" : "#BBF3ED",
    "Flex adjustment" : "#0ED3BE",
      "Token Flex CORE  Error while processing usage records" : "#0CA899",
    "Media request" : "#0A8378",
      "Media request issues" : "#0ED3BE",
    "Order issues" : "#0CA899",
      "Asset is under an open order" : "#5CE1D3",
      "Error Placing Order" : "#BBF3ED",
        "No Partner Carrier Account" : "#BBF3ED",
      "Error Reviewing Order" : "#0ED3BE",
        "Error Message: Internal error" : "#0ED3BE",
      "Incorrect order number" : "#0A8378",
      "Missing order confirmation" : "#0CA899",
      "Order Processed Email issues" : "#0ED3BE",
      "Order rejection" : "#5CE1D3",
      "Product not received" : "#BBF3ED",
      "SKU issues" : "#0ED3BE",
        "Error: Please add valid SKU" : "#0A8378",
      "The system encountered a problem with your order" : "#0A8378",
      "Update Order Error" : "#0CA899",
        "UpdateOrder : 233 : Update Order Error" : "#0CA899",
      "Update Order Status Error" : "#0ED3BE",
        "SystemError : Update Order" : "#0ED3BE",
      "VAT system issues" : "#5CE1D3",
    "Order processing" : "#0ED3BE",
      "Expedite order" : "#BBF3ED",
      "Manual fulfillment" : "#0ED3BE",
      "Migration order" : "#0A8378",
        "Crossgrade request" : "#5CE1D3",
      "Order information" : "#0CA899",
      "Promotion process request" : "#0ED3BE",
        "NAD discount" : "#BBF3ED",
    "Order return and refund (Partner and Inside)" : "#5CE1D3",
      "DRCS refund" : "#5CE1D3",
      "EULA returns" : "#BBF3ED",
      "Partial return" : "#0ED3BE",
      "Purchase order error" : "#0A8378",
      "Replacement of product" : "#0CA899",
      "RMA" : "#0ED3BE",
      "Stock rotation" : "#5CE1D3",
      "Termination of authorization" : "#BBF3ED",
    "Order sync error" : "#BBF3ED",
      "AccountBIC Previous Version : TIBCOSIEBELERRORS : Asset Sync Error" : "#0ED3BE",
      "BWENGINE100029" : "#0A8378",
      "BWHTTP100001" : "#0CA899",
      "BWHTTP100300" : "#0ED3BE",
      "Cancel Subscription Error" : "#5CE1D3",
      "Contact does not belong to ZL Account specified" : "#BBF3ED",
      "Create Order Error" : "#0ED3BE",
        "CreateOrder : 303 : Create Order Error" : "#0ED3BE",
        "CreateOrder : 555 : Create Order Error" : "#0A8378",
          "Late fee SKU not linked to renewal SKU" : "#0ED3BE",
          "Software coordinator number is not in SAP" : "#5CE1D3",
        "CreateOrder : AER3940009 : Create Order Error" : "#0CA899",
        "CreateOrder : BWAE100014 : Create Order Error" : "#0ED3BE",
        "CreateOrder : SBLERRREQAGR001 : Create Order Error" : "#5CE1D3",
        "CreatePreviousVersionAsset : SFDCCUSTMNOCONTRACTLINEITEM" : "#BBF3ED",
      "Customer # has not been created" : "#0A8378",
        "The contract start date must precede the contract end date" : "#0ED3BE",
      "Error While Submitting Order" : "#0CA899",
      "Jurisdiction code could not be determined" : "#0ED3BE",
        "CreateOrder : 217 : Create Order Error" : "#0A8378",
      "Pelican  Error provisioning Cloud Credits for user" : "#5CE1D3",
      "Publish Order Error" : "#BBF3ED",
        "PublishOrder : ADSK_SFDC_ALRS_IE_003 : Sure Sync SAP to SFDC" : "#0CA899",
      "Resync request" : "#0ED3BE",
      "Siebel Sync Issues" : "#0A8378",
        "Siebel data sync issues" : "#0ED3BE",
        "Siebel down" : "#5CE1D3",
        "Siebel Error" : "#BBF3ED",
          "SyncPartnerUserSiebel Error" : "#BBF3ED",
      "SOAPPLUGIN100002" : "#0CA899",
      "SyncContract error" : "#0ED3BE",
        "SyncContract : 10 : Cloud Provisioning error" : "#0ED3BE",
        "SyncContract : 9 : Cloud Provisioning error" : "#0A8378",
      "ZQ Order Blocks Account Sync Pending" : "#5CE1D3",
    "Renewal (Partner & Inside)" : "#0ED3BE",
      "Renewal issues (Partner & Inside)" : "#BBF3ED",
        "Renewal number issues" : "#0CA899",
        "ROM renewal error" : "#0ED3BE",
          "(R18) Renewal Orders cannot be placed before 'Partner Order Eligibility Date'" : "#0ED3BE",
          "(R36) Renewal SKU could not be picked for below line items" : "#0A8378",
          "(R39) You do not have permission to view Renewal # <Renewal Number>. This Account is outside your region." : "#0CA899",
          "(R7) Renewal SKUs are not available" : "#0ED3BE",
      "Renewal order processing" : "#0ED3BE",
  "Partner support" : "#0ED3BE",
    "How To (sales and order support)" : "#0A8378",
      "How to use Partner Center" : "#0A8378",
      "SFDC report" : "#0CA899",
    "Selfservice" : "#0CA899",
      "Renewal numbers" : "#0ED3BE",
        "Merge renewal number" : "#5CE1D3",
        "Renewal number request" : "#BBF3ED",
      "Selfservice issues" : "#5CE1D3",
        "ROM errors" : "#0ED3BE",

            "(R37) System Error" : "#0ED3BE",
            "(R4) Renewal Opportunity cannot be found" : "#5CE1D3",
          "The sales document is not yet complete: Edit data" : "#5CE1D3",
          "Validation error. Please resend with correct data" : "#BBF3ED",
  "Presales" : "#5CE1D3",
    "Presales (General)" : "#0ED3BE",
      "Purchasing product information" : "#BBF3ED",
        "Cloud credit information" : "#0A8378",
        "Discontinued product information" : "#0CA899",
        "Free product" : "#0ED3BE",
          "trial information" : "#0ED3BE",
            "Free educational product information" : "#BBF3ED",
            "Trial information" : "#0ED3BE",
        "Language support information" : "#5CE1D3",
        "License purchasing information" : "#BBF3ED",
        "Multiple computer information" : "#0ED3BE",
        "Product recommendation" : "#0A8378",
          "Product comparison" : "#0A8378",
        "Product release availability" : "#0CA899",
        "Subscription information" : "#0ED3BE",
          "Perpetual license information" : "#0CA899",
        "System requirement information" : "#5CE1D3",
          "Graphic card information" : "#0ED3BE",
          "Hardware requirement information" : "#5CE1D3",
            "Disk space requirement information" : "#0A8378",
          "Hosted operating systems information" : "#BBF3ED",
            "Citrix information" : "#0CA899",
            "VMWare information" : "#0ED3BE",
          "Operating system information" : "#0ED3BE",
    "Presales (Partner & Inside)" : "#5CE1D3",
      "Opportunity" : "#0ED3BE",
        "Lead support" : "#BBF3ED",
          "Opportunity approval" : "#0A8378",
          "Opportunity issues" : "#0CA899",
          "Opportunity owner change" : "#0ED3BE",
          "Opportunity review" : "#5CE1D3",
            "Consulting PO review" : "#5CE1D3",
          "Opportunity won" : "#BBF3ED",
      "Quote assistance" : "#0A8378",
        "Error Getting Quote Details" : "#0ED3BE",
          "Sales document # is currently being processed" : "#0ED3BE",
  "Purchasing & Returns" : "#BBF3ED",
    "Billing (Purchasing)" : "#BBF3ED",
      "Billing" : "#0CA899",
        "Payment information update" : "#0A8378",
          "Credit card information update" : "#0A8378",
      "Billing issues" : "#0ED3BE",
        "Billing charges explanation" : "#0CA899",
      "Promotion issues" : "#5CE1D3",
      "Receipt request" : "#BBF3ED",
    "Change subscription" : "#0ED3BE",
      "Change payment schedule" : "#0ED3BE",
      "Change product subscription" : "#0A8378",
      "Subscription conversion" : "#0CA899",
    "Purchasing information" : "#0A8378",
      "Cannot afford software" : "#0ED3BE",
      "Cloud credit purchase" : "#5CE1D3",
      "Locate a reseller" : "#BBF3ED",
      "Payment options information" : "#0ED3BE",
      "Pricing information" : "#0A8378",
      "Promotion information" : "#0CA899",
        "How to apply promotion" : "#0ED3BE",
        "Promotion duration" : "#5CE1D3",
        "Promotion request" : "#BBF3ED",
        "Tradein promotion information" : "#0ED3BE",
      "Trial license conversion" : "#0ED3BE",
    "Purchasing issues" : "#0CA899",
      "Cart issues" : "#5CE1D3",
      "Estore issues" : "#BBF3ED",
        "eStore order in pending status" : "#0A8378",
      "Payment issues" : "#0ED3BE",
      "We're unable to process your request due to an unknown error" : "#0A8378",
    "Return and refund" : "#0ED3BE",
      "Order cancellation" : "#0CA899",
      "Refund request" : "#0ED3BE",
        "Cloud credit refund" : "#0CA899",
      "Return information" : "#5CE1D3",
  "Renewal management" : "#0ED3BE",
    "Renewal cancellation" : "#5CE1D3",
      "Trial order cancellation" : "#BBF3ED",
    "Renewal information" : "#BBF3ED",
    "Renewal issues" : "#0ED3BE",
      "No serial number when renewing subscription" : "#0ED3BE",
    "Renewal request" : "#0A8378",
"Technical Support" : "#A76EF5",
  "Configuration issues" : "#8558C5",
    "A fatal error has occurred You have the opportunity to save recovery files for all of your changed projects." : "#8558C5",
    "An unrecoverable error has occurred  no need to recreate recovery files" : "#A76EF5",
    "Authentication issues" : "#C5A1F8",
      "The application has encountered an unexpected authentication error and must be quit" : "#8558C5",
    "Autodesk Revit has Stopped Working" : "#EADCFD",
    "Configuration file may be locked by another process or have been set Read Only" : "#A76EF5",
    "Connection issues" : "#5F3E8E",
      "Internet Connection Timed Out" : "#A76EF5",
      "Unable to connect to internet" : "#C5A1F8",
    "Display driver has stopped responding" : "#8558C5",
    "Error 500 Internal Server Error" : "#A76EF5",
    "Error: Access denied" : "#C5A1F8",
    "File is being accessed by someone else" : "#EADCFD",
    "Folder permission issues" : "#A76EF5",
      "Folders on your computer that needs access to are not available" : "#EADCFD",
    "Function key freezes program" : "#5F3E8E",
    "Insufficient disk space" : "#8558C5",
      "Error 103: Operation failed: System error" : "#A76EF5",
    "Requested service not available" : "#A76EF5",
    "Revit cannot run the external application Collaborate" : "#C5A1F8",
    "Sign in failure due to service outage  there was an unexpected authentication error" : "#EADCFD",
    "SQL issues" : "#A76EF5",
      "Error 26" : "#5F3E8E",
    "Term has Expired or Usage Limits Exceeded" : "#5F3E8E",
    "Unhandled exception has occurred in a component in your application" : "#8558C5",
      "Application does not support justintime (JIT) debugging" : "#8558C5",
    "VBA failed to initialize" : "#A76EF5",
    "Windows User Account Control issues" : "#C5A1F8",
    "Your installation cannot be used anymore" : "#EADCFD",
  "General product issues & services" : "#A76EF5",
    "API information" : "#A76EF5",
    "Customer Error Reporting (CER)" : "#5F3E8E",
    "Postprocessor issues" : "#8558C5",
    "Product compatibility information" : "#A76EF5",
    "Product feature request" : "#C5A1F8",
    "Reset to default settings" : "#EADCFD",
    "Transfer software settings" : "#A76EF5",
  "Product troubleshooting" : "#C5A1F8",
    "Customization issues" : "#5F3E8E",
      "Programming issues" : "#A76EF5",
        "API issues" : "#8558C5",
          "API request timed out" : "#8558C5",
        "DCL file issues" : "#A76EF5",
          "Missing DCL file" : "#A76EF5",
        "Scripting issues" : "#C5A1F8",
      "Shortcut issues" : "#C5A1F8",
        "The following shortcuts in the search were invalid" : "#EADCFD",
    "Data management issues" : "#8558C5",
      "BIM 360 email issues" : "#EADCFD",
        "Not receiving email from BIM 360" : "#A76EF5",
        "You are not a member of any BIM 360 Field active project" : "#5F3E8E",
      "Data corruption" : "#A76EF5",
        "Corrupt element" : "#8558C5",
        "File corruption" : "#A76EF5",
          "Data in file *.rvt is corrupt and needs to be manually recovered" : "#C5A1F8",
          "Drawing file is not valid" : "#EADCFD",
        "Model corruption" : "#C5A1F8",
        "Warning Multiply owned object" : "#EADCFD",
      "Desktop Connector issues" : "#5F3E8E",
        "Upload error Code: 400 Message: Configuration system failed to initialize" : "#A76EF5",
      "Revit Server issues" : "#8558C5",
        "Revit Server Administrator is not available" : "#5F3E8E",
        "This operation could not be completed" : "#8558C5",
      "Search issues" : "#A76EF5",
        "Lucene indexing error" : "#A76EF5",
      "Software sync issues" : "#C5A1F8",
      "Vault Server issues" : "#EADCFD",
        "Backup failed" : "#C5A1F8",
        "Could not find the Data Management Services" : "#EADCFD",
        "Error 1004" : "#A76EF5",
        "Error 227" : "#5F3E8E",
        "Error 8005" : "#8558C5",
        "The remote server returned an error : ( 400 ) Bad Request" : "#A76EF5",
        "Vault could not find data management services" : "#C5A1F8",
    "Design issues" : "#A76EF5",
      "Analysis issues" : "#A76EF5",
        "Analysis has stopped because the Solver has exited Unexpectedly" : "#EADCFD",
        "Error 313172" : "#A76EF5",
        "Error 5000" : "#5F3E8E",
        "Error E5000" : "#8558C5",
        "Error E5004" : "#A76EF5",
        "Error S1121" : "#C5A1F8",
        "No convergence of nonlinear problem" : "#EADCFD",
      "Assembly issues" : "#5F3E8E",
      "Block issues" : "#8558C5",
      "Cannot create items" : "#A76EF5",
        "Error 109" : "#A76EF5",
        "Vault Error 1320" : "#5F3E8E",
      "Constraint issues" : "#C5A1F8",
        "A cyclical constraint dependency was detected" : "#8558C5",
      "Coordinate system issues" : "#EADCFD",
      "Dimensionning issues" : "#A76EF5",
        "Tolerance issues" : "#A76EF5",
      "Drawing issues" : "#5F3E8E",
        "An error has occurred while drawing the contents of this window" : "#C5A1F8",
        "Geometry issues" : "#EADCFD",
        "Line issues" : "#A76EF5",
          "Line scale issues" : "#A76EF5",
          "Wrong lines" : "#5F3E8E",
      "Element issues" : "#8558C5",
        "Missing elements" : "#5F3E8E",
          "The model is missing many elements, and it cannot be opened" : "#8558C5",
      "Families issues" : "#A76EF5",
        "Corrupt families" : "#8558C5",
          "Family is corrupt and cannot be edited" : "#A76EF5",
        "Missing families" : "#A76EF5",
        "The path you have specified for the default family template files is invalid" : "#C5A1F8",
      "Feature issues" : "#C5A1F8",
      "Hatches and gradients issues" : "#EADCFD",
      "Layer issues" : "#A76EF5",
      "Library issues" : "#5F3E8E",
        "LoadLibrary failed with error 87" : "#EADCFD",
        "Missing libraries" : "#A76EF5",
      "Lighting issues" : "#8558C5",
        "Lighting analysis issues" : "#5F3E8E",
      "Material issues" : "#A76EF5",
      "Mesh issues" : "#C5A1F8",
      "Model issues" : "#EADCFD",
        "Cannot audit model" : "#8558C5",
        "Cannot create model" : "#A76EF5",
        "Cannot delete model" : "#C5A1F8",
        "Cannot modify model" : "#EADCFD",
        "Cannot open" : "#A76EF5",
          "access model" : "#C5A1F8",
          "Unresolved pointer references" : "#EADCFD",
      "Object issues" : "#A76EF5",
        "One or more objects in this drawing cannot be saved to the specified format" : "#5F3E8E",
      "Shading issues" : "#5F3E8E",
      "Shadow issues" : "#8558C5",
      "Surface issues" : "#A76EF5",
      "Texture issues" : "#C5A1F8",
      "Threading issues" : "#EADCFD",
        "Loading threaded data sheet" : "#8558C5",
      "Topology issues" : "#A76EF5",
    "Migration issues" : "#C5A1F8",
      "Cannot insert duplicate key row in object" : "#5F3E8E",
      "The DELETE statement conflicted with the REFERENCE constraint" : "#8558C5",
    "Other technical issues" : "#EADCFD",
      "Compatibility issues" : "#A76EF5",
        "Error 127" : "#A76EF5",
        "Issues after MacOS and IOS update" : "#C5A1F8",
        "Issues after windows update" : "#EADCFD",
          "Windows 10 Fall Creators Update issues" : "#A76EF5",
        "This drawing contains custom objects that are not supported in previous versions" : "#A76EF5",
      "Constructware Internal Error" : "#C5A1F8",
      "Crashes" : "#EADCFD",
        "Application has stopped working" : "#5F3E8E",
        "Crash after installing Windows security update" : "#8558C5",
        "Fatal error" : "#A76EF5",
          "Blue screen of death" : "#5F3E8E",
          "Error code 0xc0000005" : "#8558C5",
          "Error HRESULT 0x80004005" : "#A76EF5",
          "Unhandled access violation" : "#C5A1F8",
            "Access Violation Reading 0x0008" : "#8558C5",
            "Exception code: C0000005" : "#A76EF5",
            "Unhandled Access Violation Reading 0x0000" : "#C5A1F8",
          "Unhandled e0434352h" : "#EADCFD",
        "No memory used" : "#C5A1F8",
      "Display issues" : "#A76EF5",
        "Appearance issues" : "#EADCFD",
        "Black screen" : "#A76EF5",
        "Color issues" : "#5F3E8E",
        "Not enough free RAM for HIDE" : "#8558C5",
        "Text display issues" : "#A76EF5",
          "Dictionary not available" : "#A76EF5",
          "Encoding issues" : "#5F3E8E",
          "Font issues" : "#8558C5",
            "Font size issues" : "#EADCFD",
          "For your current display scale set to # %" : "#A76EF5",
          "The given key was not in the dictionary" : "#C5A1F8",
        "UI issues" : "#C5A1F8",
          "Dialog boxes do not open" : "#EADCFD",
          "UI elements are missing" : "#A76EF5",
            "Missing button" : "#A76EF5",
            "Missing menu" : "#5F3E8E",
            "Missing toolbar and ribbons" : "#8558C5",
            "Missing workspace" : "#A76EF5",
            "The Ribbon does not have any tabs or panels currently loaded" : "#C5A1F8",
          "UI elements not properly scaled" : "#5F3E8E",
        "Unwanted lines" : "#EADCFD",
      "Error 1000" : "#5F3E8E",
      "Exception has been thrown by the target of an invocation" : "#8558C5",
      "Hardware acceleration issues" : "#A76EF5",
      "Instability" : "#C5A1F8",
      "Issues after installation" : "#EADCFD",
        "Crash after install" : "#A76EF5",
        "Startup issues" : "#5F3E8E",
          "DLL failed to initialize" : "#8558C5",
            "Error 1114" : "#EADCFD",
          "Error: Buzzsaw could not be launched" : "#A76EF5",
          "Failed to initialize" : "#C5A1F8",
          "Hangs on splash screen" : "#EADCFD",
          "REX startup failed" : "#A76EF5",
          "System.NullReferenceException: Object reference not set to an instance of an object" : "#5F3E8E",
          "The driver AceRedist is missing" : "#8558C5",
          "VOLUMEMGT : Failed to initialize Stone+Wire connection" : "#A76EF5",
      "Msscript.ocx error" : "#A76EF5",
      "No error message displayed" : "#5F3E8E",
      "Oops something went wrong" : "#8558C5",
    "Performance issues" : "#A76EF5",
      "Memory peaks" : "#A76EF5",
        "Out of memory error" : "#8558C5",
    "Printing" : "#5F3E8E",
      "Plotting issues" : "#C5A1F8",
        "Color printing issues" : "#A76EF5",
        "CTB or STB file is missing" : "#C5A1F8",
        "Plot" : "#EADCFD",
          "Print crash" : "#C5A1F8",
        "Printer" : "#A76EF5",
          "Plotter not recognized" : "#EADCFD",
        "Product showing in educational mode" : "#5F3E8E",
        "Revit could not start the print job because it was unable to connect to the specified printer" : "#8558C5",
        "This plotter configuration cannot be used" : "#A76EF5",
    "Project issues" : "#8558C5",
      "Cannot create project" : "#EADCFD",
      "Cannot download project" : "#A76EF5",
        "The Project you selected was unable to be opened correctly" : "#C5A1F8",
      "Project corruption" : "#5F3E8E",
    "Publishing issues" : "#A76EF5",
    "Replication issues" : "#C5A1F8",
    "Scanning issues" : "#EADCFD",
    "Utilities issues" : "#A76EF5",
      "Cannot copy" : "#8558C5",
        "Copy to clipboard failed" : "#EADCFD",
      "Cannot create log file" : "#A76EF5",
      "Cannot save" : "#C5A1F8",
        "One or more objects in this drawing cannot be saved" : "#A76EF5",
        "You can attempt to save changes into the following file up to the start of the last command" : "#5F3E8E",
        "You do not have permission to save to this location" : "#8558C5",
      "Command issues" : "#EADCFD",
        "Unknown command" : "#A76EF5",
      "Cursor issues" : "#A76EF5",
      "Export issues" : "#5F3E8E",
        "Issues exporting settings" : "#C5A1F8",
        "Vault Data Transfer Utility issues" : "#EADCFD",
      "File issues" : "#8558C5",
        "Cannot delete file" : "#A76EF5",
        "Cannot open file" : "#5F3E8E",
          "Cannot find specified drawing file" : "#A76EF5",
          "Error 126" : "#5F3E8E",
          "File is currently in use or is readonly" : "#8558C5",
          "Freeze or crash when opening file" : "#A76EF5",
          "The drawing file cannot be opened because it was created with a more recent version" : "#C5A1F8",
          "There was a problem sending the command to the program" : "#EADCFD",
          "Unable to create logfile for this drawing" : "#A76EF5",
          "Error handler reentered" : "#5F3E8E",
        "File size issues" : "#8558C5",
        "Missing file" : "#A76EF5",
        "The file could not be translated" : "#C5A1F8",
      "Import issues" : "#A76EF5",
        "WebServiceError [8005]" : "#EADCFD",
      "Missing font" : "#C5A1F8",
        "One or more SHX files are missing" : "#A76EF5",
      "Profile view issues" : "#EADCFD",
      "Uploading issues" : "#A76EF5",
      "Xref issues" : "#5F3E8E",
    "Visualization issues" : "#5F3E8E",
      "Rendering issues" : "#8558C5",
        "Unexpected internal failure" : "#5F3E8E",
      "Simulation issues" : "#A76EF5",
        "Another UJMC instance may be running warning" : "#8558C5",
      "Viewport issues" : "#C5A1F8",
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.partition()
    .size([2 * Math.PI, radius * radius]);

var arc = d3.arc()
    .startAngle(function(d) { return d.x0; })
    .endAngle(function(d) { return d.x1; })
    .innerRadius(function(d) { return Math.sqrt(d.y0); })
    .outerRadius(function(d) { return Math.sqrt(d.y1); });

// Use d3.text and d3.csvParseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("sunburst.csv", function(text) {
  var csv = d3.csvParseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // Turn the data into a d3 hierarchy and calculate the sums.
  var root = d3.hierarchy(json)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });
  
  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition(root).descendants()
      .filter(function(d) {
          return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.data.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.datum().value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = d.ancestors().reverse();
  sequenceArray.shift(); // remove root node from the array
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .on("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", 1000)
      .attr("height", 100)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var trail = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.data.name + d.depth; });

  // Remove exiting nodes.
  trail.exit().remove();

  // Add breadcrumb and label for entering nodes.
  var entering = trail.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.data.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.data.name; });

  // Merge enter and update selections; set position for all nodes.
  entering.merge(trail).attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s)-50)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 75, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
  var foundChild = false;
  for (var k = 0; k < children.length; k++) {
    if (children[k]["name"] == nodeName) {
      childNode = children[k];
      foundChild = true;
      break;
    }
  }
  // If we don't already have a child node for this branch, create it.
  if (!foundChild) {
    childNode = {"name": nodeName, "children": []};
    children.push(childNode);
  }
  currentNode = childNode;
      } else {
  // Reached the end of the sequence; create a leaf node.
  childNode = {"name": nodeName, "size": size};
  children.push(childNode);
      }
    }
  }
  return root;
};
