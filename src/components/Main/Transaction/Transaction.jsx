import React from "react";
import styles from  './Transaction.module.css'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const Transaction = () =>{
    // const transactions = [
    //     {
    //         id:1,
    //         date:"12.11.2022",
    //         type:"replenishment",
    //         amount:200
    //     },
    //     {
    //         id:2,
    //         date:"13.11.2022",
    //         type:"withdrawal",
    //         amount:100
    //     }
    // ]
    function createData(name, amount, time,type) {
        return { name, amount,time,type};
    }

    const rows = [
        createData('Развлечения', 10000, '12.10.2022',"withdrawal"),
        createData('Машина', 4600, '14.06.2022','replenishment'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
        createData('Больница', 400, '20.11.2022','withdrawal'),
    ];
    return(
        <div>
            <h1 className={styles.title}>Транзакции</h1>
            <div className={styles.table_transaction}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Описание</TableCell>
                                <TableCell align="right">Сумма</TableCell>
                                <TableCell align="right">Дата транзакции</TableCell>
                                <TableCell align="right">Тип транзакции</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    style={row.type === 'withdrawal' ?{backgroundColor:'#81FF66'} : {backgroundColor:'#FF554B'}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="right">
                                        {
                                            row.type === 'withdrawal' ? <>Пополнение</>:
                                                <>Вывод</>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Transaction