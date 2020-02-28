import 'datatables';
import axios from 'axios';
import $ from 'jquery';

import {Component} from "../component";
import template from "./countries-table.html"

export class CountriesTable extends Component {

    constructor(placeholderId, props) {
        super(placeholderId, props, template);
        this.loadData();
    }

    loadData() {
        axios.get('/api/countries')
            .then(response => {
                this.buildTable(response.data)
            })
    }

    buildTable(data) {
        $("#countries-table").DataTable({
            data: data.data,
            columns: [
                {data: "Country"},
                {data: "Year_2016"}
            ]
        })
    }


}
