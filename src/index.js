import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables/media/css/jquery.dataTables.min.css'

import {CountriesTable} from "./components/countries_table/countries-table";


class IndexController {
    constructor() {
        this.element = document.getElementById("root");
        this.initializeComponents();
    }

    initializeComponents() {
        this.countriesTable = new CountriesTable("countries-table-container");
    }
}

window.ctrl = new IndexController();
