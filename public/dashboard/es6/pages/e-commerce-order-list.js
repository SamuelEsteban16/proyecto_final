class OrderList {

    static init() {
        $('.e-commerce-table').DataTable({
            "language": {
                "lengthMenu": "Mostrar"+
                              `<select class=" custom-select custom-select-sm form-control form-control-sm">
                                  <option value = "10">10</option>
                                  <option value = "25">25</option>
                                  <option value = "50">50</option>
                                  <option value = "100">100</option>
                                  <option value = "-1">Todos</option>
                              </select>` +
                              "registros por página",
                "zeroRecords": "No se encontraron registros",
                "info": "Mostrando la pagina _PAGE_ de _PAGES_",
                "infoEmpty": "No hay registros disponibles",
                "infoFiltered": "(Filtrado de _MAX_ registros totales)",
                'search': 'Buscar:',
                'paginate': {
                            'next': 'Siguiente',
                            'previous': 'Anterior'
                        }
                }
        });

        $("#checkAll").on('change',function(){
            $('.e-commerce-table input[type="checkbox"]').prop('checked',$(this).is(":checked"));
        });
    }
}

$(() => { OrderList.init(); });

