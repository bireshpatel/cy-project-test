class util{
    getRandomNumber(len) {
       return Math.floor(Math.random() * Math.floor(len)) + 1;
    }

    string_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }

      string_ShortString() {
              var text = "";
              var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

              for (var i = 0; i < 6; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

              return text;
            }
}
export default util