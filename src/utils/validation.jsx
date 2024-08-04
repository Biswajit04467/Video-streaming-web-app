
export const CheckValidation = (email, password) => {

    const isEmailValid = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const isPassowrdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email is not valid";
    if (!isPassowrdValid) return "Password is not valid";

    return null;
}