import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect } from "react";

import { CommonSlice } from "../../redux/slices";
import { useDispatch } from "react-redux";

export default function Table() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CommonSlice.setTitle("Table"));
  }, []);

  const data = {
    autoPageSize: true,
    columns: [
      { field: "id", hide: true },
      { field: "desk", headerName: "Desk", width: 110, flex: 1 },
      {
        field: "commodity",
        headerName: "Commodity",
        width: 180,
        editable: false,
        flex: 1,
      },
      {
        field: "traderName",
        headerName: "Trader Name",
        width: 120,
        editable: false,
        flex: 1,
      },
      {
        field: "traderEmail",
        headerName: "Trader Email",
        width: 150,
        editable: false,
        flex: 1,
      },
      {
        field: "quantity",
        headerName: "Quantity",
        type: "number",
        width: 140,
        editable: false,
        flex: 1,
      },
    ],
    rows: [
      {
        id: "cace0470-d122-5c44-a980-a417259c14ab",
        desk: "D-3559",
        commodity: "Robusta coffee",
        traderName: "Elsie Olson",
        traderEmail: "labil@leb.tc",
        quantity: 51777,
      },
      {
        id: "8a5ef950-ed6b-5dbd-bcb3-ece54d6f5ce7",
        desk: "D-3050",
        commodity: "Milk",
        traderName: "Jeff Floyd",
        traderEmail: "otlubwa@fiuje.la",
        quantity: 10365,
      },
      {
        id: "f5ae1b18-7952-58ea-96c3-59b11bcb20f5",
        desk: "D-1684",
        commodity: "Coffee C",
        traderName: "Ruth Johnson",
        traderEmail: "copek@tuvna.bh",
        quantity: 53619,
      },
      {
        id: "22766587-c852-5d0f-b15b-3339756871b0",
        desk: "D-8457",
        commodity: "Soybean Meal",
        traderName: "Jesus Aguilar",
        traderEmail: "sehek@vile.gp",
        quantity: 46065,
      },
      {
        id: "68739f4e-6748-5327-927c-132ea41aef8a",
        desk: "D-2066",
        commodity: "Cocoa",
        traderName: "Lucinda Carter",
        traderEmail: "buvew@fidoczi.gr",
        quantity: 15998,
      },
      {
        id: "ad2b182f-9d8b-57cd-8f7d-1a34f3ab97b0",
        desk: "D-1997",
        commodity: "Cocoa",
        traderName: "Christian Tate",
        traderEmail: "bawrefco@ras.tv",
        quantity: 68488,
      },
      {
        id: "7ad81013-2df8-584e-b24e-2a4e3c087999",
        desk: "D-2966",
        commodity: "Sugar No.14",
        traderName: "Arthur Ryan",
        traderEmail: "iglefsef@ze.at",
        quantity: 92981,
      },
      {
        id: "cee47578-a7a6-5efb-864c-b81b931edcdd",
        desk: "D-2612",
        commodity: "Wheat",
        traderName: "Janie Quinn",
        traderEmail: "ligvuuw@avupopfi.gr",
        quantity: 10553,
      },
      {
        id: "10b7092e-7770-57eb-862a-a8c2282ac1af",
        desk: "D-5017",
        commodity: "Corn",
        traderName: "Ruth Maldonado",
        traderEmail: "fusedlev@husukuv.nc",
        quantity: 19631,
      },
      {
        id: "43b0081d-d402-5e97-8829-0d1c52f7a250",
        desk: "D-8755",
        commodity: "Frozen Concentrated Orange Juice",
        traderName: "Carrie Jacobs",
        traderEmail: "votewuwo@seza.gi",
        quantity: 43817,
      },
      {
        id: "2bde5295-fb23-50e6-9c39-08252057ddbe",
        desk: "D-8969",
        commodity: "Frozen Concentrated Orange Juice",
        traderName: "Daisy Harrington",
        traderEmail: "nuep@ohuwucuv.ht",
        quantity: 89675,
      },
      {
        id: "d4156816-2dd2-538d-8169-d9da620eaf56",
        desk: "D-2642",
        commodity: "Frozen Concentrated Orange Juice",
        traderName: "Lora George",
        traderEmail: "saw@ik.bt",
        quantity: 9098,
      },
      {
        id: "c306f605-31a1-55dc-a076-3b60ad0664c1",
        desk: "D-9203",
        commodity: "Soybean Oil",
        traderName: "Landon Robertson",
        traderEmail: "valep@ku.tw",
        quantity: 73736,
      },
      {
        id: "1318da8d-7f1a-5b19-ad2b-633832320383",
        desk: "D-5235",
        commodity: "Soybean Oil",
        traderName: "Hulda Wong",
        traderEmail: "ajaahofot@jur.ch",
        quantity: 30531,
      },
      {
        id: "fd2ab30b-c1f7-5d38-b2f4-5ecfbe933f08",
        desk: "D-9333",
        commodity: "Coffee C",
        traderName: "Marie Rivera",
        traderEmail: "bihe@cuovasu.kh",
        quantity: 4286,
      },
      {
        id: "59d5acd6-00b6-5266-95b8-3176d494ec73",
        desk: "D-882",
        commodity: "Soybeans",
        traderName: "Cole Burke",
        traderEmail: "witve@zeg.no",
        quantity: 14335,
      },
      {
        id: "8c67ceec-eeca-56dd-ba48-04c48ecf5fd3",
        desk: "D-4216",
        commodity: "Robusta coffee",
        traderName: "Virgie Meyer",
        traderEmail: "ka@peji.br",
        quantity: 36442,
      },
      {
        id: "b945bee3-6188-5654-82e3-0e20f3ad8fd5",
        desk: "D-3886",
        commodity: "Robusta coffee",
        traderName: "Rose Lucas",
        traderEmail: "tudkefhov@nalza.gp",
        quantity: 35491,
      },
      {
        id: "52182e8e-9635-5e26-ac14-364a1c000759",
        desk: "D-6241",
        commodity: "Milk",
        traderName: "Mathilda Lambert",
        traderEmail: "ezazeb@pi.tv",
        quantity: 34680,
      },
      {
        id: "5979e09e-4934-57f0-9680-fa745d3889ef",
        desk: "D-2687",
        commodity: "Cocoa",
        traderName: "Herbert Wise",
        traderEmail: "pad@rer.gw",
        quantity: 89883,
      },
      {
        id: "e728ac08-1611-576b-b87d-e6524673b1f4",
        desk: "D-9402",
        commodity: "Cotton No.2",
        traderName: "Alejandro Torres",
        traderEmail: "abimgo@rajucodu.org",
        quantity: 58935,
      },
      {
        id: "0c7a2450-ed82-571b-b219-f218c58507d0",
        desk: "D-2393",
        commodity: "Soybeans",
        traderName: "Scott Smith",
        traderEmail: "lidoli@cohe.om",
        quantity: 28225,
      },
      {
        id: "b43d8a44-f8f9-5d0d-8577-dfffd9c4aac5",
        desk: "D-4545",
        commodity: "Cotton No.2",
        traderName: "Theodore Lawson",
        traderEmail: "bu@su.ac",
        quantity: 13484,
      },
      {
        id: "dbef6b4f-d03e-544f-aae1-b762c195f8e6",
        desk: "D-1327",
        commodity: "Sugar No.11",
        traderName: "Louis Reed",
        traderEmail: "ko@efza.za",
        quantity: 65984,
      },
      {
        id: "12892b9a-fb8a-5ed8-a765-810f730c86d0",
        desk: "D-7445",
        commodity: "Sugar No.11",
        traderName: "Pearl Mills",
        traderEmail: "hupdippih@wa.sm",
        quantity: 31482,
      },
    ],
  };

  return (
    <>
      <h5 className="content-header">
        <i className="material-icons">grid_on</i>Table View
      </h5>
      <div className="row table-screen">
        <div className="table-container col s12 m12">
          <DataGrid
            {...data}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      </div>
    </>
  );
}
