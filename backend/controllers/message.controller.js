// message.controller.js
export const sendMessage = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
