window.onload = grafico_onload

$(document).ready(function () {
    $('[name=saldoinicial]').maskMoney({
        prefix: 'R$ ',
        allowNegative: false,
        thousands: '.',
        decimal: ',',
        affixesStay: true
    });
        $('[name=salario]').maskMoney({
            prefix: 'R$ ',
            allowNegative: false,
            thousands: '.',
            decimal: ',',
            affixesStay: true
        });

        $('[name=contrib_p]').maskMoney({
            prefix: 'R$ ',
            allowNegative: false,
            thousands: '.',
            decimal: ',',
            affixesStay: true
        });

        $('[name=contrib_ptr]').maskMoney({
            prefix: 'R$ ',
            allowNegative: false,
            thousands: '.',
            decimal: ',',
            affixesStay: true
        });
});

function calculaContribuicao() {

    let salStr = $('[name=salario]').maskMoney('unmasked');
    if (!salStr)
        salStr = '0';

    let perStr = document.form.percentual_contr.value;
    if (!perStr)
        perStr = '0';

    let salario = parseFloat(salStr[0]);
    let percentual_contr = parseFloat(perStr);
    let contr = salario * percentual_contr / 100;

    let perc_contr_patro = percentual_contr
    if (percentual_contr > 8)
        perc_contr_patro = '8';
    if (percentual_contr < 3)
        perc_contr_patro = '0';

    let contr_patro = salario * perc_contr_patro / 100;
    if (!contr_patro)
        contr_patro = '0';
    var contribuicao_ = contr.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    var contribuicao_ptr = contr_patro.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });

    let contr_total = (salario * percentual_contr / 100) + contr_patro;

    document.form.perc_contr_patro.value = perc_contr_patro;
    document.form.contr.value = contribuicao_;
    document.form.contr_patro.value = contribuicao_ptr;
    document.getElementById("TotalContribuicao").value = contr_total;
}

function numeroContrib() {

    let atuStr = document.form.idade_atual.value;
    if (!atuStr)
        atuStr = '0';
    let apoStr = document.form.idade_aposentadoria.value;
    if (!apoStr)
        apoStr = '0';

    let idade_atual = parseInt(atuStr);
    let idade_aposentadoria = parseInt(apoStr);
    let numero_contrib = (idade_aposentadoria - idade_atual) * (13);

    document.form.idade_atual.value = idade_atual;
    document.form.idade_aposentadoria.value = idade_aposentadoria;
    document.form.numero_contrib.value = numero_contrib;
}

function resultadoTotal() {
    //    Definição de Contribuiçã total ligada ao campo
    let salStr = $('[name=salario]').maskMoney('unmasked');
    if (!salStr)
        salStr = '0';

    let perStr = document.form.percentual_contr.value;
    if (!perStr)
        perStr = '0';

    let salario = parseFloat(salStr[0]);
    let percentual_contr = parseFloat(perStr);
    let contr = salario * percentual_contr / 100;

    let perc_contr_patro = percentual_contr
    if (percentual_contr > 8)
        perc_contr_patro = '8';
    if (percentual_contr < 3)
        perc_contr_patro = '0';

    let contr_patro = salario * perc_contr_patro / 100;
    if (!contr_patro)
        contr_patro = '0';
    var contribuicao_ = contr.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    var contribuicao_ptr = contr_patro.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    let contr_total = (salario * percentual_contr / 100) + contr_patro;
    document.getElementById("TotalContribuicao").value = contr_total;
    //

    let nctStr = document.form.numero_contrib.value;
    let num_contrib = parseInt(nctStr);

    let cprStr = document.getElementById("TotalContribuicao").value;
    let c = parseInt(cprStr);

    let CNTstr = $('[name=contrib_p]').maskMoney('unmasked');
    let contrib_p = parseFloat(CNTstr[0]);

    let sdiStr = $('[name=saldoinicial]').maskMoney('unmasked');
    let si = parseFloat(sdiStr[0]);

    var rp = (c + si);
    var result_p;

    result_p = rp;

    for (var i = 1; i < num_contrib; i++) {

        result_p = (rp * 1.00246626977230369) + c;
        rp = c;
        rp = result_p;

    }

    var rm = (c + si);
    var result_m;

    result_m = rm;

    for (var i = 1; i < num_contrib; i++) {

        result_m = (rm * 1.00407412378364835) + c;
        rm = c;
        rm = result_m;

    }

    var ro = (c + si);
    var result_o;

    result_o = ro;

    for (var i = 1; i < num_contrib; i++) {

        result_o = (ro * 1.00565414538740527) + c;
        ro = c;
        ro = result_o;
    }

    total_de_contrib = (contrib_p * num_contrib) + si + (contr_patro * num_contrib);
    rentabilidade_p = result_p - total_de_contrib;
    rentabilidade_m = result_m - total_de_contrib;
    rentabilidade_o = result_o - total_de_contrib;

    var rentabilidade_p_ = rentabilidade_p.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });

    var rentabilidade_m_ = rentabilidade_m.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });

    var rentabilidade_o_ = rentabilidade_o.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });

    var resultado_p = result_p.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    var resultado_m = result_m.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    var resultado_o = result_o.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });

    //p1
    var num_contrib_p1 = num_contrib / 4;

    var rp1 = (c + si);
    var result_p1;
    result_p1 = rp1;

    for (var i = 1; i < num_contrib_p1; i++) {

        result_p1 = (rp1 * 1.00246626977230369) + c;
        rp1 = c;
        rp1 = result_p1;

    }
    //p2
    var num_contrib_p2 = num_contrib / 2;


    var rp2 = (c + si);
    var result_p2;
    result_p2 = rp2;

    for (var i = 1; i < num_contrib_p2; i++) {

        result_p2 = (rp2 * 1.00246626977230369) + c;
        rp2 = c;
        rp2 = result_p2;

    }
    //p3
    var num_contrib_p3 = num_contrib * (3 / 4);


    var rp3 = (c + si);
    var result_p3;
    result_p3 = rp3;

    for (var i = 1; i < num_contrib_p3; i++) {

        result_p3 = (rp3 * 1.00246626977230369) + c;
        rp3 = c;
        rp3 = result_p3;

    }
    //m1
    var num_contrib_m1 = num_contrib / 4;

    var rm1 = (c + si);
    var result_m1;
    result_m1 = rm1;

    for (var i = 1; i < num_contrib_m1; i++) {

        result_m1 = (rm1 * 1.00407412378364835) + c;
        rm1 = c;
        rm1 = result_m1;

    }
    //m2
    var num_contrib_m2 = num_contrib / 2;

    var rm2 = (c + si);
    var result_m2;
    result_m2 = rm2;

    for (var i = 1; i < num_contrib_m2; i++) {

        result_m2 = (rm2 * 1.00407412378364835) + c;
        rm2 = c;
        rm2 = result_m2;

    }
    //m3
    var num_contrib_m3 = num_contrib * (3 / 4);

    var rm3 = (c + si);
    var result_m3;
    result_m3 = rm3;

    for (var i = 1; i < num_contrib_m3; i++) {

        result_m3 = (rm3 * 1.00407412378364835) + c;
        rm3 = c;
        rm3 = result_m3;

    }
    //o1
    var num_contrib_o1 = num_contrib / 4;

    var ro1 = (c + si);
    var result_o1;
    result_o1 = ro1;

    for (var i = 1; i < num_contrib_o1; i++) {

        result_o1 = (ro1 * 1.00565414538740527) + c;
        ro1 = c;
        ro1 = result_o1;

    }
    //o2
    var num_contrib_o2 = num_contrib / 2;

    var ro2 = (c + si);
    var result_o2;
    result_o2 = ro2;

    for (var i = 1; i < num_contrib_o2; i++) {

        result_o2 = (ro2 * 1.00565414538740527) + c;
        ro2 = c;
        ro2 = result_o2;

    }
    //o3
    var num_contrib_o3 = num_contrib * (3 / 4);

    var ro3 = (c + si);
    var result_o3;
    result_o3 = ro3;

    for (var i = 1; i < num_contrib_o3; i++) {

        result_o3 = (ro3 * 1.00565414538740527) + c;
        ro3 = c;
        ro3 = result_o3;

    }
    var valor_i = (c + si);


    primeira_coluna = (num_contrib / 13) / 4;
    segunda_coluna = (num_contrib / 13) / 2;
    terceira_coluna = (num_contrib / 13) * (3 / 4)
    quarta_coluna = (num_contrib / 13)

    //GRAFICO
    new Chartist.Line('.ct-chart', {
        labels: ['0', parseInt(primeira_coluna) + " " + "anos", parseInt(segunda_coluna) + " " + "anos", parseInt(terceira_coluna) +
            " " + "anos", parseInt(quarta_coluna) + " " + "anos"
        ],
        series: [
            [valor_i, result_p1, result_p2, result_p3, result_p],
            [valor_i, result_m1, result_m2, result_m3, result_m],
            [valor_i, result_o1, result_o2, result_o3, result_o]
        ]
        
    }, {
        fullWidth: true,
        chartPadding: {
            right: 20
        }

    });
    var aplicacao = (contrib_p * num_contrib) + si + (contr_patro * num_contrib);
    var aplicacao_t = aplicacao.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    document.getElementById("table.saldo_final_p").innerHTML = resultado_p;
    document.getElementById("table.saldo_final_m").innerHTML = resultado_m;
    document.getElementById("table.saldo_final_o").innerHTML = resultado_o;

    document.getElementById("table.contrib_t_p").innerHTML = aplicacao_t;
    document.getElementById("table.contrib_t_m").innerHTML = aplicacao_t;
    document.getElementById("table.contrib_t_o").innerHTML = aplicacao_t;

    document.getElementById("table.rentabilidade_p").innerHTML = rentabilidade_p_;
    document.getElementById("table.rentabilidade_m").innerHTML = rentabilidade_m_;
    document.getElementById("table.rentabilidade_o").innerHTML = rentabilidade_o_;
}

function grafico_onload() {
    let nctStr = document.form.numero_contrib.value;
    let num_contrib = parseInt(nctStr);
    primeira_coluna = (num_contrib / 13) / 4;
    segunda_coluna = (num_contrib / 13) / 2;
    terceira_coluna = (num_contrib / 13) * (3 / 4);
    quarta_coluna = (num_contrib / 13);

    //GRAFICO inicial
    new Chartist.Line('.ct-chart', {
        labels: [
            '0', primeira_coluna +
             " " + "anos", segunda_coluna +
              " " + "anos", terceira_coluna +
               " " + "anos", quarta_coluna +
                " " + "anos"
    ],
        series: [
            [160, 24485, 58213, 104671, 168663],
            [160, 27352, 73756, 152478, 286031],
            [160, 30597, 94277, 226811, 502647]
        ]
    }, {
        fullWidth: true,
        chartPadding: {
            right: 20
        }
    });
}