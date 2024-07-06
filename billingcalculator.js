var name="";
    document.getElementById('name').addEventListener('keyup',function(){
        name=document.querySelector("#name").value;
        document.querySelector('#name2').innerHTML=name;
    })
var email="";
document.querySelector('#email').addEventListener('keyup',function(){
    email=document.querySelector('#email').value
    document.querySelector('#email2').innerHTML=email;
})
var mobile="";
document.querySelector('#mobile').addEventListener('keyup',function(){
    mobile=document.querySelector('#mobile').value;
    document.querySelector('#mobile2').innerHTML=mobile;
})

var smosa_price=10,kachori_price=12,vadapav_price=60,maggi_price=50;
var smosa_q=0,kachori_q=0,vadapav_q=0,maggi_q=0;
var showbillsamosa="", showbillkachori="",showbillvadapav="",showbillmaggi="";
// kachori_q,vadapav_q,maggi_q;
document.getElementById('smosa').addEventListener('keyup',function(){
    smosa_q=document.getElementById('smosa').value;
    if(smosa_q=="" || smosa_q=="0"){
        showbillsamosa="";
        showbill();
    }
    else{
    showbillsamosa= `<tr>
<td>Smosa</td>
<td>Rs.${smosa_price}</td>
<td >${smosa_q}</td>
<td>${smosa_price}X${smosa_q}=${smosa_price*smosa_q}</td>
</tr>`;
showbill();
    }
})
document.getElementById('kachori').addEventListener('keyup',function(){
    kachori_q=document.getElementById('kachori').value;
    if(kachori_q=="" || kachori_q=="0"){
        showbillkachori;
        showbill();
    }else{
    showbillkachori= `<tr>
<td>kachori</td>
<td>Rs.${kachori_price}</td>
<td >${kachori_q}</td>
<td>${kachori_price}X${kachori_q}=${kachori_price*kachori_q}</td>
</tr>`;
showbill();
    }
})
document.getElementById('vadapav').addEventListener('keyup',function(){
    vadapav_q=document.getElementById('vadapav').value;
    if(vadapav_q=="" || vadapav_q=="0"){
showbillvadapav="";
showbill();
    }else{
    showbillvadapav= `<tr>
<td>Vadapav</td>
<td>Rs.${vadapav_price}</td>
<td >${vadapav_q}</td>
<td>${vadapav_price}X${vadapav_q}=${vadapav_price*vadapav_q}</td>
</tr>`;
showbill();
    }
})
document.getElementById('maggi').addEventListener('keyup',function(){
    maggi_q=document.getElementById('maggi').value;
    if(maggi_q=="" || maggi_q=="0"){
        showpricemaggi="";
        showbill();
    }else{
    showbillmaggi= `<tr>
<td>Maggi</td>
<td>Rs.${maggi_price}</td>
<td >${maggi_q}</td>
<td>${maggi_price}X${maggi_q}=${maggi_price*maggi_q}</td>
</tr>`;
showbill();
    }
})

function showbill(){
    document.getElementById("bill").innerHTML=showbillsamosa+showbillkachori+showbillvadapav+showbillmaggi;
    total();
}

function total(){
document.getElementById('amount').innerHTML=`${smosa_price*smosa_q+ maggi_price*maggi_q +vadapav_price*vadapav_q+kachori_price*kachori_q}`;


}

