export class GlobalConstants {
    //Menssagem
    public static genericError: string = "Algo inesperado aconteceu. Por favor tente mais tarde";
    public static unauthorized: string = "Você não tem autorização para acessar essa página";
    public static productExistError: string = "O produto não existe";
    public static productAdded: string = "O produto foi adicionado com sucesso";

    //Regex
    public static nameRegex: string = "[a-zA-Z0-9 ]*";
    public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    public static contactNumberRegex: string = "^[e0-9]{9,9}$";

    public static error: string = "erro";
}