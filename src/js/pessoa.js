class Pessoa {
    constructor() {
        this.id = 1;
        this.arrayPessoas = [];
    }

    cadastrar() {
        let pessoa = this.lerDados();
        if (this.validarCampos(pessoa)) {
            this.adicionar(pessoa);
        }

        console.log(this.arrayPessoas);
    }

    adicionar(pessoa) {
        this.arrayPessoas.push(pessoa);
        this.id++;
    }

    lerDados() {
        let pessoa = {};

        pessoa.id = this.id;
        pessoa.usuario = document.getElementById('usuario-box').value;
        pessoa.email = document.getElementById('email-box').value;
        pessoa.confirmeemail = document.getElementById('confirmeemail-box').value;
        pessoa.senha = document.getElementById('senha-box').value;
        pessoa.confirmesenha = document.getElementById('confirmeSenha-box').value;

        return pessoa;
    }

    validarCampos(pessoa) {
        let msg = '';

        if (pessoa.usuario == '') {
            msg += "Informe seu nome de usuário \n";
        }
        if (pessoa.email == '') {
            msg += "Informe seu email \n";
        }
        if (pessoa.confirmeemail != pessoa.email) {
            msg += "Verifique os emails informados \n";
        }
        if (pessoa.senha == '') {
            msg += "Informe sua senha \n";
        }
        if (pessoa.confirmesenha != pessoa.senha) {
            msg += "Verifique as senhas informadas \n";
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }

    login() {
        let email = document.getElementById('login-email-box').value;
        let senha = document.getElementById('login-senha-box').value;

        const usuarioEncontrado = this.arrayPessoas.find(pessoa => pessoa.email === email && pessoa.senha === senha);
        
        if (usuarioEncontrado) {
            alert("Login bem-sucedido");
            
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    }
}

var pessoa = new Pessoa();
