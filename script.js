let Arry = []

const TableUI = () => {
   document.querySelector("#data-table").innerHTML = "";
   for (let i = 0; i < Arry.length; i++) {
      let table = document.createElement("tr");
      let data_1 = document.createElement("td");

      data_1.innerHTML = Arry[i].FullName;

      let data_2 = document.createElement("td");
      data_2.innerHTML = Arry[i].GRID;

      let data_3 = document.createElement("td");
      data_3.innerHTML = Arry[i].Phone;

      let data_4 = document.createElement("img");
      data_4.src = Arry[i].Image

      let data_5 = document.createElement("td");
      data_5.innerHTML = Arry[i].Select

      let delete_1 = document.createElement("td");
      delete_1.innerHTML = "Delete"
      delete_1.style.backgroundColor = "red";
      delete_1.style.textAlign = "center";
      delete_1.style.cursor = "pointer";
      delete_1.addEventListener("click", (e) => {
         e.target.parentNode.remove();
      })
      table.append(data_1, data_2, data_3, data_4, data_5, delete_1)
      document.querySelector("#data-table").append(table)

   }
}

const Table_Data = (e) => {
   e.preventDefault();

   let FullName = document.querySelector("#fullname").value;
   let GRID = document.querySelector("#grid").value;
   let Phone = document.querySelector("#phone").value;
   let Image = document.querySelector("#image").value;
   let Select = document.querySelector("#select").value;

   let Table_Data_Obj =
   {
      FullName: FullName,
      GRID: GRID,
      Phone: Phone,
      Image: Image,
      Select: Select
   };

   Arry.push(Table_Data_Obj);
   TableUI()
}
const delete_all = () => {
   document.querySelector("#data-table").innerHTML = "";
}

document.querySelector("#table_data_store").addEventListener("submit", Table_Data)
document.querySelector("#del").addEventListener("click", delete_all)