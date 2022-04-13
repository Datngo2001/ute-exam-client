import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import axiosForm from '../../api/axiosForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import mydata from './Fake.json';
import { func } from 'prop-types';
function DoTest(props) {
    // var selectedAnswer;

    const { state } = useLocation();
    const test = JSON.parse(state.content);
    // const temp = test.questions.map((ques, index) => {
    //     ques.id = index;
    //     return ques;
    // });
    // test.questions = temp;
    // console.log(test);

    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [value, setValue] = React.useState([]);
    const [result, setResult] = React.useState([]);

    function countResult() {
        let result = 0;
        for (let i = 0; i < test.questions.length; i++) {
            for (let option of value) {
                if (
                    option.question === i &&
                    option.answer === test.questions[i].answer
                )
                    result++;
            }
        }
        return result;
    }

    return (
        <div
            style={{
                marginTop: '15px',
                marginBottom: '7px',
                paddingBottom: '30px',
            }}
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={5} style={{ width: '100%' }}>
                    <Grid
                        style={{
                            borderTop: '10px solid rgb(103, 58, 183)',
                            borderRadius: 10,
                        }}
                    >
                        <div>
                            <div>
                                <Paper elevation={2} style={{ width: '100%' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            marginLeft: '15px',
                                            paddingTop: '20px',
                                            paddingBottom: '20px',
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            style={{
                                                fontFamily: 'sans-serif Roboto',
                                                marginBottom: '15px',
                                                width: '100%',
                                            }}
                                        >
                                            {test.title}
                                        </Typography>
                                    </div>
                                </Paper>

                                {!isSubmitted ? (
                                    <div>
                                        <Grid>
                                            {test.questions.map((ques, i) => (
                                                <div key={i}>
                                                    <br></br>
                                                    <Paper>
                                                        <div>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        'flex',
                                                                    flexDirection:
                                                                        'column',
                                                                    alignItems:
                                                                        'flex-start',
                                                                    marginLeft:
                                                                        '6px',
                                                                    paddingTop:
                                                                        '15px',
                                                                    paddingBottom:
                                                                        '15px',
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="subtitle1"
                                                                    style={{
                                                                        marginLeft:
                                                                            '10px',
                                                                    }}
                                                                >
                                                                    {i + 1}.{' '}
                                                                    {ques.title}
                                                                </Typography>

                                                                <div>
                                                                    <RadioGroup
                                                                        aria-label="quiz"
                                                                        name="quiz"
                                                                    >
                                                                        {ques.options.map(
                                                                            (
                                                                                op,
                                                                                j,
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        j
                                                                                    }
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            display:
                                                                                                'flex',
                                                                                            marginLeft:
                                                                                                '7px',
                                                                                        }}
                                                                                    >
                                                                                        <FormControlLabel
                                                                                            value={
                                                                                                op
                                                                                            }
                                                                                            control={
                                                                                                <Radio
                                                                                                    onChange={() => {
                                                                                                        setValue(
                                                                                                            (
                                                                                                                prev,
                                                                                                            ) => [
                                                                                                                ...prev.filter(
                                                                                                                    (
                                                                                                                        p,
                                                                                                                    ) =>
                                                                                                                        p.question !==
                                                                                                                        i,
                                                                                                                ),
                                                                                                                {
                                                                                                                    question:
                                                                                                                        i,
                                                                                                                    answer: j,
                                                                                                                },
                                                                                                            ],
                                                                                                        );
                                                                                                    }}
                                                                                                />
                                                                                            }
                                                                                            label={
                                                                                                op
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            ),
                                                                        )}
                                                                    </RadioGroup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Paper>
                                                </div>
                                            ))}
                                        </Grid>
                                        <Grid>
                                            <br></br>
                                            <div style={{ display: 'flex' }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => {
                                                        setIsSubmitted(true);
                                                        setResult(
                                                            countResult(),
                                                        );
                                                    }}
                                                >
                                                    Submit
                                                </Button>
                                            </div>
                                            <br></br>

                                            <br></br>
                                        </Grid>
                                    </div>
                                ) : (
                                    <div>
                                        <Typography variant="body1">
                                            Form submitted
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="error"
                                        >
                                            Result: {result}/
                                            {test.questions.length}
                                        </Typography>
                                        <Typography variant="body2">
                                            Thanks for submiting form
                                        </Typography>

                                        <Button>Submit another response</Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default DoTest;
