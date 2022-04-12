import React, { useEffect } from 'react'
import { Grid } from "@material-ui/core";
import { Paper, Typography } from "@material-ui/core";
import { useLocation } from 'react-router-dom';

function DoTest() {

  var selectedAnswer;

  const { state } = useLocation()
  const test = JSON.parse(state.content)

  return (
    <div
      style={{ marginTop: "15px", marginBottom: "7px", paddingBottom: "30px" }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={5} style={{ width: "100%" }}>
          <Grid
            style={{
              borderTop: "10px solid rgb(103, 58, 183)",
              borderRadius: 10,
            }}
          >
            <div>
              <div>
                <Paper elevation={2} style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginLeft: "15px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h4"

                      style={{
                        fontFamily: "sans-serif Roboto",
                        marginBottom: "15px",
                        width: "100%",
                      }}
                    >
                      {test.title}
                    </Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </Grid>

        </Grid>
      </Grid>
    </div>
  )
}

export default DoTest