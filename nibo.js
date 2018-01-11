(function() {
    //Desenvolvido por Julio
    // Create the connector object
    var myConnector = tableau.makeConnector();
    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var categories_cols = [{
            id: "id",
            alias: "id categorias",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "name",
            alias: "nome de categoria",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "referenceCode",
            alias: "codigo de referencia",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "type",
            alias: "tipo categoria",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "group_id",
            alias: "id grupo de categoria",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "organization_id",
            alias: "id empresa",
            dataType: tableau.dataTypeEnum.string
        }];

        var groups_cols = [{
            id: "id",
            alias: "id grupo",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "name",
            alias: "nome grupo",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "referenceCode",
            alias: "codigo referencia grupo",
            dataType: tableau.dataTypeEnum.string
        }];

        var cost_center_cols = [{
            id: "id",
            alias: "id centro de custo",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "description",
            alias: "descricao",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "external_code",
            alias: "codigo externo",
            dataType: tableau.dataTypeEnum.string
        }];

        var entries_cols = [{
            id: "id",
            alias: "id entrada",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "id_organization",
            alias: "id empresa",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "id_schedule",
            alias: "id agendamento",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "id_account",
            alias: "id conta",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "id_stakeholder",
            alias: "id stakeholder",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "category",
            alias: "categoria",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "date",
            alias: "data entrada",
            dataType: tableau.dataTypeEnum.datetime
        },{
            id: "identifier",
            alias: "identificador",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "value",
            alias: "valor",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "description",
            alias: "descrição",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "reference",
            alias: "referencia",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "is_reconciliated",
            alias: "reconciliada",
            dataType: tableau.dataTypeEnum.bool
        },{
            id: "is_flagged",
            alias: "sinalizada",
            dataType: tableau.dataTypeEnum.bool
        },{
            id: "is_transfer",
            alias: "transferencia",
            dataType: tableau.dataTypeEnum.bool
        },{
            id: "kind",
            alias: "tipo",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "id_transfer",
            alias: "id transferencia",
            dataType: tableau.dataTypeEnum.string
        }];

        var accounts_cols = [{
            id: "id",
            alias: "id conta",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "bank_id",
            alias: "id banco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "bank_agency",
            alias: "agencia",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "bank_account",
            alias: "conta",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "bank_account_verification_number",
            alias: "número de verificacao",
            dataType: tableau.dataTypeEnum.int
        },{
            id: "scraping_enabled",
            alias: "scraping",
            dataType: tableau.dataTypeEnum.bool
        },{
            id: "name",
            alias: "nome",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "open_balance",
            alias: "balanco aberto",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "date_of_open_balance",
            alias: "data do balanco",
            dataType: tableau.dataTypeEnum.datetime
        },{
            id: "is_virtual",
            alias: "virtual",
            dataType: tableau.dataTypeEnum.bool
        },{
            id: "organization_id",
            alias: "id empresa",
            dataType: tableau.dataTypeEnum.string
        }];


        var banks_cols = [{
            id: "id",
            alias: "id banco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "code",
            alias: "codigo banco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "name",
            alias: "nome",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "color",
            alias: "cor",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "scraping_enabled",
            alias: "scraping",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "bank_number",
            alias: "numero banco",
            dataType: tableau.dataTypeEnum.string
        }];

        var cost_center_cols = [{
            id: "id",
            alias: "id centro de custo",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "description",
            alias: "descricao",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "external_code",
            alias: "codigo externo",
            dataType: tableau.dataTypeEnum.string
        }];

        var stakeholder_cols = [{
            id: "id",
            alias: "id stakeholder",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "type",
            alias: "tipo stakeholder",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "name",
            alias: "nome",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "initials_name",
            alias: "iniciais",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "email",
            alias: "email",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "phone",
            alias: "telefone",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "document_number",
            alias: "numero documento",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "document_type",
            alias: "tipo documento",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "communication_contact_name",
            alias: "nome contato",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "communication_email",
            alias: "email contato",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "communication_phone",
            alias: "telefone contato",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "communication_cellPhone",
            alias: "celular contato",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "communication_webSite",
            alias: "site contato",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_line1",
            alias: "linha 1 endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_line2",
            alias: "linha 2 endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_number",
            alias: "numero endereco",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "address_district",
            alias: "distrito endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_city",
            alias: "cidade endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_state",
            alias: "estado endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_zipCode",
            alias: "codigo postal endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_country",
            alias: "pais endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "address_ibgeCode",
            alias: "codigo ibge endereco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "bank",
            alias: "banco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "agency",
            alias: "agencia",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "account_number",
            alias: "numero conta",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "company_name",
            alias: "nome empresa",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "municipal_inscription",
            alias: "inscricao municipal empresa",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "organization_id",
            alias: "id empresa",
            dataType: tableau.dataTypeEnum.string
        }];

        var balance_cols = [{
            id: "account_id",
            alias: "id conta",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "bank_id",
            alias: "id banco",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "balance",
            alias: "saldo",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "organization_id",
            alias: "id empresa",
            dataType: tableau.dataTypeEnum.string
        }];

        var organization_cols = [{
            id: "id",
            alias: "id empresa",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "name",
            alias: "nome empresa",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "company_name",
            alias: "nome companhia",
            dataType: tableau.dataTypeEnum.string
        }];

        var categorias = {
            id: "categories",
            alias: "Lista de categorias",
            columns: categories_cols
        };

        var grupos = {
            id: "groups",
            alias: "Lista de grupos",
            columns: groups_cols
        };

        var entradas = {
            id: "entries",
            alias: "Lista de transferencias",
            columns: entries_cols
        };

        var contas = {
            id: 'accounts',
            alias: 'Lista de contas',
            columns: accounts_cols
        }

        var centros_custo = {
            id: 'cost_centers',
            alias: 'Lista centros de custo',
            columns: cost_center_cols
        }

        var bancos = {
            id: "banks",
            alias: "Lista de bancos",
            columns: banks_cols
        };

        var stakeholders = {
            id: "stakeholders",
            alias: "Lista de stakeholders",
            columns: stakeholder_cols
        };

        var saldo = {
            id: "balance",
            alias: "Consulta saldo",
            columns: balance_cols
        };
        var empresas = {
            id: "organization",
            alias: "empresa",
            columns: organization_cols
        }
        schemaCallback([categorias, grupos, entradas, contas, centros_custo, bancos, stakeholders, saldo, empresas]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        var dataObj = JSON.parse(tableau.connectionData),
            dataString = "Organization=" + dataObj.organization + "&apitoken=" + dataObj.apitoken,
            tableData = [];

        if (table.tableInfo.id == "categories") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/schedules/categories?" + dataString, function(resp) {
                console.log(resp);
                var items = resp.items;
                var i = 0;
               
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].id,
                        "name": items[i].name,
                        "referenceCode": items[i].referenceCode,
                        "type": items[i].type,
                        "group_id": items[i].group.id,
                        "organization_id": dataObj.organization
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        else if (table.tableInfo.id == "groups") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/schedules/categories/groups?" + dataString, function(resp) {
                console.log(resp);
                var items = resp.items;
                var i = 0;
               
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].id,
                        "name": items[i].name,
                        "referenceCode": items[i].referenceCode
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }

        else if (table.tableInfo.id == "entries") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/accounts/transfer?" + dataString, function(resp) {
                console.log(resp);
                var items = resp.items;
                var i = 0;
               //, , , , , , , , , , 
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].originEntry.entryId,
                        "id_organization": dataObj.organization,
                        "id_schedule": items[i].originEntry.scheduleId,
                        "id_account": items[i].originEntry.account.id,
                        "id_stakeholder": items[i].originEntry.stakeholder,
                        "category": items[i].originEntry.category,
                        "date": items[i].originEntry.date,
                        "identifier": items[i].originEntry.identifier,
                        "value": items[i].originEntry.value,
                        "description": items[i].originEntry.description,
                        "reference": items[i].originEntry.reference,
                        "is_reconciliated": items[i].originEntry.isReconciliated,
                        "is_flagged": items[i].originEntry.isFlagged,
                        "is_transfer": items[i].originEntry.isTransfer,
                        "kind": "Origem",
                        "id_transfer": items[i].id
                    });
                    tableData.push({
                        "id": items[i].destinyEntry.entryId,
                        "id_organization": dataObj.organization,
                        "id_schedule": items[i].destinyEntry.scheduleId,
                        "id_account": items[i].destinyEntry.account.id,
                        "id_stakeholder": items[i].destinyEntry.stakeholder,
                        "category": items[i].destinyEntry.category,
                        "date": items[i].destinyEntry.date,
                        "identifier": items[i].destinyEntry.identifier,
                        "value": items[i].destinyEntry.value,
                        "description": items[i].destinyEntry.description,
                        "reference": items[i].destinyEntry.reference,
                        "is_reconciliated": items[i].destinyEntry.isReconciliated,
                        "is_flagged": items[i].destinyEntry.isFlagged,
                        "is_transfer": items[i].destinyEntry.isTransfer,
                        "kind": "Destino",
                        "id_transfer": items[i].id
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        else if (table.tableInfo.id == "accounts") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/accounts?" + dataString, function(resp) {
                var items = resp.items;
                var i = 0;
               
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].id,
                        "bank_id": items[i].bankId,
                        "bank_agency": items[i].bankAgency,
                        "bank_account": items[i].bankAccount,
                        "bank_account_verification_number": items[i].bankAccountVerificationNumber,
                        "scraping_enabled": items[i].scrapingEnabled,
                        "name": items[i].name,
                        "open_balance": items[i].openBalance,
                        "date_of_open_balance": items[i].dateOfOpenBalance,
                        "is_virtual": items[i].isVirtual,
                        "organization_id": dataObj.organization
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        else if (table.tableInfo.id == "cost_centers") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/costcenters?" + dataString, function(resp) {
                var items = resp.items;
                var i = 0;
               
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].costCenterId,
                        "description": items[i].description,
                        "external_code": items[i].externalCode
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        else if (table.tableInfo.id == "banks") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/banks?" + dataString, function(resp) {
                var items = resp.items;
                var i = 0;
               
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].id,
                        "code": items[i].code,
                        "name": items[i].name,
                        "color": items[i].color,
                        "scraping_enabled": items[i].scrapingEnabled,
                        "bank_number": items[i].bankNumber
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        else if (table.tableInfo.id == "stakeholders") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/stakeholders?" + dataString, function(resp) {
                var items = resp.items;
                var i = 0;
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].id,
                        "type": items[i].type,
                        "name": items[i].name,
                        "initials_name": items[i].initialsName,
                        "email": items[i].email,
                        "phone": items[i].phone,
                        "document_number": items[i].document.number,
                        "document_type": items[i].document.type,
                        "communication_contact_name": items[i].communication.contactName,
                        "communication_email": items[i].communication.email,
                        "communication_phone": items[i].communication.phone,
                        "communciation_cellPhone": items[i].communication.cellPhone,
                        "communication_webSite": items[i].communication.webSite,
                        "address_line1": items[i].address.line1,
                        "address_line2": items[i].address.line2,
                        "address_number": items[i].address.number,
                        "address_district": items[i].address.district,
                        "address_city": items[i].address.city,
                        "address_state": items[i].address.state,
                        "address_zipCode": items[i].address.zipCode,
                        "address_country": items[i].address.country,
                        "address_ibgeCode": items[i].address.ibgeCode,
                        "bank": items[i].bankAccountInformation.bank,
                        "agency": items[i].bankAccountInformation.agency,
                        "account_number": items[i].bankAccountInformation.accountNumber,
                        "company_name": items[i].companyInformation.companyName,
                        "municipal_inscription": items[i].companyInformation.municipalInscription,
                        "bank_number": dataObj.organization,
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        else if (table.tableInfo.id == "balance") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/accounts/views/balance?" + dataString, function(resp) {
                var items = resp.items;
                var i = 0;
               
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "account_id": items[i].accountId,
                        "bank_id": items[i].bank.id,
                        "balance": items[i].balance,
                        "organization_id": dataObj.organization
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        else if (table.tableInfo.id == "organization") {
            $.getJSON("https://api.nibo.com.br/empresas/v1/organizations?" + dataString, function(resp) {
                var items = resp.items;
                var i = 0;
               
                for (i = 0, len = items.length; i < len; i++) {
                    tableData.push({
                        "id": items[i].organizationId,
                        "name": items[i].name,
                        "company_name": items[i].companyName
                    });
                }
                table.appendRows(tableData);
            doneCallback();
            });
        }
        
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submissionButton").click(function() {
            var dataObj = {
                organization: $('#organization').val().trim(),
                apitoken: $('#apitoken').val().trim(),
            };
            if (!dataObj.organization || !dataObj.apitoken){
                $('#errorMessage').css('display', 'block');
                $('#errorMessage').html('<center>Preencha todos os campos</center>')
            }
            else{
                $('#errorMessage').css('display', 'none');
                tableau.connectionData = JSON.stringify(dataObj); // Use this variable to pass data to your getSchema and getData functions
                tableau.connectionName = "NIBO WEB Data Connector"; // This will be the data source name in Tableau
                tableau.submit(); // This sends the connector object to Tableau
            }
        });
    });
})();
