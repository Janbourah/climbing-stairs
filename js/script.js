const calculateAndDraw = () => {
  const n = parseInt(document.getElementById("n-input").value);

  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  const totalWays = dp[n];

  renderStairs(n);
  renderArray(dp);
  document.getElementById(
    "result"
  ).textContent = `Total Ways to reach step ${n}: ${totalWays}`;
};

const renderStairs = (n) => {
  const staircase = document.getElementById("staircase");
  staircase.innerHTML = "";

  for (let i = 1; i <= n; i++) {
    const step = document.createElement("div");
    step.classList.add("step");

    step.style.height = `${i * 15}px`;
    step.textContent = i;
    staircase.appendChild(step);
  }
};

const renderArray = (dp) => {
  const arrayContainer = document.getElementById("dp-array");
  arrayContainer.innerHTML = "";

  for (let i = 0; i < dp.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("array-cell");

    const label = document.createElement("div");
    label.classList.add("array-label");
    label.textContent = i === 0 ? "Ground" : `Step ${i}`;

    const value = document.createElement("div");
    value.textContent = dp[i];

    cell.appendChild(label);
    cell.appendChild(value);
    arrayContainer.appendChild(cell);
  }
};

calculateAndDraw();
