import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { axiosInstance } from '../api/axios/config'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from "react";

type sentimentdata = {
    label: string,
    score: number
}


const AIplayground2 = () => {

    const [text, setText] = useState('');
    const [analysisData, setAnalysisData] = useState<sentimentdata[]>([]);

    async function getSentimentAndEmotion() {
        try {
            const response = await axiosInstance.post('analysis/predictPostEmotionInBulk', [text]);
            if (response.data[0]) {
                // Add sentiment data
                setAnalysisData([response.data[0].sentiment]);

                // Add emotions data
                if (response.data[0].emotions) {
                    setAnalysisData(prevData => [...prevData, ...response.data[0].emotions]);
                }
            }

        } catch (error) {
            console.error(error);
        }
    }

    function handleSubmit() {
        getSentimentAndEmotion();
    }

    useEffect(() => {

    }, [analysisData])


    return (
        <section className="h-180 justify-center items-center bg-light-1 w-full">
            <div className="flex flex-col gap-3 justify-center items-center">
                <div className="py-10 px-10 ">
                    <TextField sx={{ width: '400px' }}
                        id="outlined-multiline-static"
                        label="Enter Text"
                        multiline
                        rows={4}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
                <div className="min-w-[400px]">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Data</TableCell>
                                    <TableCell align="right">Score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {analysisData.map((row) => (
                                    <TableRow key={row.label}>
                                        <TableCell component="th" scope="row">
                                            {row.label}
                                        </TableCell>
                                        <TableCell align="right">{row.score}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>


        </section>
    )
}

export default AIplayground2