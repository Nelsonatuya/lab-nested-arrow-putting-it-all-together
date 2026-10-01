function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const tryLogin = (passwordAttempt) => {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount += 1;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    if (attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }

    return "Account locked due to too many failed login attempts";
  };

  return tryLogin;
}

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
