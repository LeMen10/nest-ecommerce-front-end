function generateToken() {
    return (Math.random() + 1).toString(36).substring(7);
}

export default generateToken;