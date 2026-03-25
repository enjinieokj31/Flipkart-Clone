const bcrypt = require('bcrypt');

// Function to hash password
async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return { hashedPassword, salt };
  } catch (error) {
    throw error;
  }
}

module.exports = hashPassword;