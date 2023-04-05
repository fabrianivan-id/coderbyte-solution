function StepWalking(num) {

  let dp = [];

  dp[0] = 1;

  dp[1] = 1;

  for (let i = 2; i <= num; i++) {

    dp[i] = dp[i-1] + dp[i-2];

  }

  return dp[num];

}
