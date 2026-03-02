//As a QA engineer,classify bugs based on two factors:frequency ("always","often","rarely") and impact ("blocker","major","minor").
//Write a javascript program using nested if else that prints the bug severity level
//Classification matrix:
//always + blocker -> P0 | always +major ->P1 | always +minor -> P2
//-often + blocker ->P1 | often +major->P2  | often +minor ->P3
//rarely + blocker ->P2 | rarely + major ->P3 | rarely + minor -> P4




let frequency = "always";
let impact = "blocker";

let severity = "";

if(frequency === "always")
{
    if(impact === "blocker")
    {
        severity = "P0";
    }
    if(impact==="major")
    {
        severity = "P1";
    }
    if(impact === "minor")
    {
        severity = "P2";
    }
}
else if (frequency === "rarely")
{
    if(impact === "blocker")
    {
        severity = "P1";
    }
    if(impact==="major")
    {
        severity = "P2";
    }
    if(impact === "minor")
    {
        severity = "P3";
    }
}
else if (frequency === "often")
{
    if(impact === "blocker")
    {
        severity = "P2";
    }
    if(impact==="major")
    {
        severity = "P3";
    }
    if(impact === "minor")
    {
        severity = "P4";
    }
}

console.log("Bug Severity Level",severity);