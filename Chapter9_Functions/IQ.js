function runTest(name,status,duration)
{
    return `${"name"}:${status} (${duration}ms)`;
}

//arguments
runTest("login","pass",320);
