console.log("It is working");
document.getElementById("class1").value = "";

// window.onload = () => defineLogic();
// let obj = {};
// defineLogic = () => {
// document.getElementById("submit").onclick = () => createArray(obj)
// }

// createArray = () => {
//  const productId = document.getElementById("productId").value;
//  const quantity = document.getElementById("quantity").value;
//  obj[productId] = quantity;
//  console.log(JSON.stringify(obj));
// }

const person = [];

// function begain()
// {
//     fill()
//     addone()

// }

var ide = 0;
function fill() {
  var na = document.getElementById("sname").value;
  var cl = document.getElementById("class1").value;
  var ph = document.getElementById("physics").value;
  var ch = document.getElementById("chemistry").value;
  var ma = document.getElementById("maths").value;
  var en = document.getElementById("english").value;
  var cp = document.getElementById("computers").value;

  var flag = 0;

  let obj2 = {
    id: ide,
    fl: flag,
    name: na,
    classes: cl,
    physics: ph,
    chemistry: ch,
    maths: ma,
    english: en,
    computers: cp,
  };

  ide = ide + 1;
  person.push(obj2);
  const itr = document.querySelector(".save");

  a = ` 
    <table id="${obj2.id}">
        <tr id="hello">
          <td id="data${obj2.id}">${obj2.name}</td>
          <td id="data1${obj2.id}">${obj2.classes}</td>
          <td><button onclick="editcall(${obj2.id});">Edit</button></td>
          <td><button onclick="gene(${obj2.id});">Generate Report</button></td>
          <td><button id="brats" onclick=" parentElement.parentElement.remove(); delete1(${obj2.id});">Delete</button></td>
        </tr>
    </table>`;
  //parentNode.parentNode.remove()
  itr.innerHTML += a;
  document.getElementById("sname").value = "";
  document.getElementById("class1").value = "";
  document.getElementById("physics").value = "";
  document.getElementById("chemistry").value = "";
  document.getElementById("maths").value = "";
  document.getElementById("english").value = "";
  document.getElementById("computers").value = "";
  document.getElementById("submit").style.display = "inline";
  document.getElementById("updt").style.display = "none";
  document.getElementById("cnl1").style.display = "none";




}

let editcall = (selected_id) => {
  var id = selected_id;
  person.forEach(google);

  function google(item) {
    if (item.id == id) {
      // console.log(item.name)
      item.fl = 1;
      document.getElementById("sname").value = item.name;
      document.getElementById("class1").value = item.classes;
      document.getElementById("physics").value = item.physics;
      document.getElementById("chemistry").value = item.chemistry;
      document.getElementById("maths").value = item.maths;
      document.getElementById("english").value = item.english;
      document.getElementById("computers").value = item.computers;
    }
  }
  document.getElementById("submit").style.display = "none";
  document.getElementById("updt").style.display = "inline";
  document.getElementById("cnl1").style.display = "inline";
};
function update1() {
  var idw = 0;
  person.forEach(runner);
  function runner(item1) {
    if (item1.fl == 1) {
      idw = item1.id;
      console.log(item1);
      item1.name = document.getElementById("sname").value;
      document.getElementById("data" + idw).innerHTML = item1.name;

      item1.classes = document.getElementById("class1").value;
      document.getElementById("data1" + idw).innerHTML = item1.classes;

      item1.physics = document.getElementById("physics").value;
      item1.chemistry = document.getElementById("chemistry").value;
      item1.maths = document.getElementById("maths").value;
      item1.english = document.getElementById("english").value;
      item1.computers = document.getElementById("computers").value;

      item1.fl = 0;
    }
  }
  document.getElementById("sname").value = "";
  document.getElementById("class1").value = "";
  document.getElementById("physics").value = "";
  document.getElementById("chemistry").value = "";
  document.getElementById("maths").value = "";
  document.getElementById("english").value = "";
  document.getElementById("computers").value = "";
  document.getElementById("submit").style.display = "inline";
  document.getElementById("updt").style.display = "none";
  document.getElementById("cnl1").style.display = "none";
}

function fill1() {
  document.getElementById("sname").value = "";
  document.getElementById("class1").value = "";
  document.getElementById("physics").value = "";
  document.getElementById("chemistry").value = "";
  document.getElementById("maths").value = "";
  document.getElementById("english").value = "";
  document.getElementById("computers").value = "";
  document.getElementById("submit").style.display = "inline";
  document.getElementById("updt").style.display = "none";
  document.getElementById("cnl1").style.display = "none";
  person.map((a) => (a.fl = 0));
}

let delete1 = (selected_id) => {
  var id = selected_id;
  person.forEach(dele);
  function dele(item) {
    if (item.id == id) {
      person.splice(item.id, 1);
    }
  }
};

let gene = (selected_id) => {
  var ideq = selected_id;
  person.forEach(argu);
  function argu(it) {
    if (it.id == ideq) {
      const itr1 = document.querySelector(".itr1");
      const tot = Number(it.computers)+Number(it.maths)+Number(it.physics)+Number(it.chemistry)+Number(it.english)
      const tot1 = tot/500;
      const pers = tot1*100;
      let rond = pers.toFixed(2);
      if(it.computers>=33)
      {
        if(it.maths>=33)
        {
          if(it.physics>=33)
          {
            if(it.chemistry>=33)
            {
              if(it.english>=33)
              {
                var opt = 'PASS'
              }
              else
              {
                var opt = 'FAIL';
              }
            }
            else
            {
              var opt = 'FAIL';
            }
          }
          else
          {
            var opt = 'FAIL';
          }

        }
        else
        {
          var opt = 'FAIL';
        }
      }
      else
      {
        var opt = 'FAIL';
      }

      itr1.innerHTML = `      
      <h2>Report Card 2021-2022</h2>

        <table id="a1111">
          <tr>
            <th class="s1111">Name</th>
            <th class="s1111">Class</th>
            <th class="s1111">Country</th>
          </tr>
          <tr>
            <td class="s1111">${it.name}</td>
            <td class="s1111">${it.classes}</td>
            <td class="s1111">India</td>
          </tr>
        </table>

        <table id="a1111">
          <tr>
            <th class="s1111">Physics</th>
            <td class="s1111">${it.physics}</td>
          </tr>
          <tr>
            <th class="s1111">Chemistry</th>
            <td class="s1111">${it.chemistry}</td>
          </tr>
          <tr>
            <th class="s1111">Maths</th>
            <td class="s1111">${it.maths}</td>
          </tr>
          <tr>
            <th class="s1111">English</th>
            <td class="s1111">${it.english}</td>
          </tr>
          <tr>
            <th class="s1111">Computers</th>
            <td class="s1111">${it.computers}</td>
          </tr>
          <tr>
            <th class="s1111">Total</th>
            <td class="s1111">${tot}/500</td>
          </tr>
          <tr>
            <th class="s1111">percentage</th>
            <td class="s1111">${rond}%</td>
          </tr>
          <br>
          <tr>
            <th class="s1111">Result</th>
            <td class="s1111"><b>${opt}</b></td>
          </tr>
      </table>


        `;
    }
  }
};

// https://stackoverflow.com/questions/48146515/get-input-type-array-value-with-key-in-html
