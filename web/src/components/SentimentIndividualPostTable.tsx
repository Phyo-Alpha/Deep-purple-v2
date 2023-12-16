import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function createData(
    postId: string,
    platform: string,
    postlink: string,
    date: string,
    overall_sentiment: string,
    negative_emotions: number,
    positive_emotions: number,
) {
    return { postId, postlink, date, platform, overall_sentiment, negative_emotions, positive_emotions };
}

const rows = [
    createData('123456', 'twitter', 'https://twitter.com/Ogo4200/status/1735541172435669001', '17/7/2022', 'very negative', 2, 3),
    createData('123456', 'twitter', 'https://twitter.com/Ogo4200/status/1735541172435669001', '17/7/2022', 'very negative', 2, 3),
    createData('123456', 'twitter', 'https://twitter.com/Ogo4200/status/1735541172435669001', '17/7/2022', 'very negative', 2, 3),
    createData('123456', 'twitter', 'https://twitter.com/Ogo4200/status/1735541172435669001', '17/7/2022', 'very negative', 2, 3),
    createData('123456', 'twitter', 'https://twitter.com/Ogo4200/status/1735541172435669001', '17/7/2022', 'very negative', 2, 3),
    createData('123456', 'twitter', 'https://twitter.com/Ogo4200/status/1735541172435669001', '17/7/2022', 'very negative', 2, 3),
    createData('123456', 'twitter', 'https://twitter.com/Ogo4200/status/1735541172435669001', '17/7/2022', 'very negative', 2, 3),

];

export default function SentimentIndividualPostTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="right">Platform</TableCell>
                        <TableCell align="center">Link</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Sentiment</TableCell>
                        <TableCell align="right">
                            <p>Positive</p>
                            <p>Emotions</p>
                        </TableCell>
                        <TableCell align="right">
                            <p>Negative</p>
                            <p>Emotions</p>
                        </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.postId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.postId}
                            </TableCell>
                            <TableCell align="center">{row.platform}</TableCell>
                            <TableCell align="right" style={{ maxWidth: '150px', wordWrap: 'break-word' }}>
                                <p className='max-w-[100px]'>{row.postlink}</p>
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.overall_sentiment}</TableCell>
                            <TableCell align="right">{row.positive_emotions}</TableCell>
                            <TableCell align="right">{row.negative_emotions}</TableCell>
                            <TableCell align="right">
                                <Button>
                                    <NavLink to={`/analytics/negativeposts/${row.postId}`}>
                                        View
                                    </NavLink>
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button>
                                    Suspend
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

