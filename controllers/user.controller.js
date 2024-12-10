const User = require('../models/user.model');

// Update user details
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, phoneNumber, location } = req.body;

  try {
    // Validate that the user exists
    let user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    // Update allowed fields
    if (name) user.name = name;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (location) user.location = location;

    // Save updated user to the database
    await user.save();

    // Send back the updated user, excluding sensitive fields like password
    res.json({
      success: true,
      data: {
        id: user.id,
        name: user.name,
        phoneNumber: user.phoneNumber,
        location: user.location,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
