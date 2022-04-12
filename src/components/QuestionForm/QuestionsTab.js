import React, { useState, useEffect } from "react";
//import QuestionHeader from './QuestionHeader';
import { Grid } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { FcRightUp } from "react-icons/fc"
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/core/Radio";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccordionActions from "@material-ui/core/AccordionActions";
import Divider from "@material-ui/core/Divider";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import axios from 'axios'
import SaveIcon from "@material-ui/icons/Save";
import axiosForm from "../../api/axiosForm";

function QuestionsTab(props) {
  const [questions, setQuestions] = React.useState([]);

  const [formData, setFormData] = React.useState({});
  const [loadingFormData, setLoadingFormData] = React.useState(true);
  const [formTitle, setFormTitle] = useState("United Document");
  const [formDescription, setFormDescription] = useState("");


  useEffect(() => {
    if (props.formData.questions !== undefined) {
      //console.log(props.formData.questions.length);
      if (props.formData.questions.length === 0) {
        setQuestions([{ title: "Question", options: ["Option 1"], open: false }]);
      } else {
        setQuestions(props.formData.questions)
      }
      setLoadingFormData(false)
    }
    setFormData(props.formData)
  }, [props.formData])

  function saveFormData() {

  }
  function saveQuestions() {


    var data = {
      title: formTitle,
      questions: questions
    }
    setQuestions(questions);

    console.log("Auto saving question Nows");
    /*  console.log([questions[0].title])
     console.log(questions[0].options[1].optionText)
     console.log(questions[1].options.length)
       console.log(JSON.stringify(questions[1].options[1].optionText)); */
    console.log(JSON.stringify(data))
    sendAPI(data);

  }

  function sendAPI(data) {
    axiosForm.createForm(data).
      then(
        (result) => {
          console.log(result);
          setQuestions(result.questions);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
        }
      );
  }
  function addMoreQuestionField() {
    expandCloseAll(); //setting 

    setQuestions((questions) => [
      ...questions,
      {
        title: "Question",
        options: ["Option 1"],
        open: true,
      },
    ]);
  }

  function copyQuestion(i) {
    let qs = [...questions];
    expandCloseAll();
    const myNewOptions = [];
    qs[i].options.forEach((opn) => {

      var opNew = opn

      myNewOptions.push(opNew)
    });

    var newQuestion = {
      title: qs[i].title,
      options: myNewOptions,
      open: true,
    };
    setQuestions((questions) => [...questions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  }

  function handleOptionValue(text, i, j) {
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].options[j] = text;

    setQuestions(optionsOfQuestion);
  }
  function addAnswer(i, index) {
    var answerOfQuestion = [...questions];

    answerOfQuestion[i].answer = index;

    setQuestions(answerOfQuestion)
  }
  function doneAnswer(i) {
    var answerOfQuestion = [...questions];

    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

    setQuestions(answerOfQuestion)
  }

  function setOptionAnswer(answer, qnumber) {
    var Questions = [...questions];
    Questions[qnumber].answer = answer;
    setQuestions(Questions);
    console.log(qnumber + " " + answer);
  }


  function handleQuestionValue(text, i) {
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].title = text;
    setQuestions(optionsOfQuestion);
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...questions];

    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );

    setQuestions(itemF);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function showAsQuestion(i) {
    let qs = [...questions];
    qs[i].open = false;
    setQuestions(qs);
  }

  function addOption(i) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 4) {
      optionsOfQuestion[i].options.push(
        "Option " + (optionsOfQuestion[i].options.length + 1)
      );
    } else {
      console.log("Max  5 options ");
    }
    //console.log(optionsOfQuestion);
    setQuestions(optionsOfQuestion);
  }

  function removeOption(i, j) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion);
      console.log(i + "__" + j);
    }
  }

  function expandCloseAll() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }

  function handleExpand(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;
      } else {
        qs[j].open = false;
      }
    }
    setQuestions(qs);
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <Draggable key={i} draggableId={i + "id"} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ width: "100%", marginBottom: "-7px" }}>
                  <DragIndicatorIcon
                    style={{ transform: "rotate(-90deg)", color: "#DAE0E2" }}
                    fontSize="small"
                  />
                </div>

                <Accordion
                  onChange={() => {
                    handleExpand(i);
                  }}
                  expanded={questions[i].open}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    elevation={1}
                    style={{ width: "100%" }}
                  >
                    {!questions[i].open ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          marginLeft: "3px",
                          paddingTop: "15px",
                          paddingBottom: "15px",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          style={{ marginLeft: "0px" }}
                        >
                          {i + 1}. {ques.title}
                        </Typography>

                        {ques.options.map((op, j) => (
                          <div key={j}>
                            <div style={{ display: "flex" }}>
                              <FormControlLabel
                                disabled
                                control={
                                  <Radio style={{ marginRight: "3px" }} />
                                }
                                label={
                                  <Typography style={{ color: "#555555" }}>
                                    {ques.options[j]}
                                  </Typography>
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </AccordionSummary>

                  <AccordionDetails>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "15px",
                        marginTop: "-15px",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography style={{ marginTop: "20px" }}>
                          {i + 1}.
                        </Typography>
                        <TextField
                          fullWidth={true}
                          placeholder="Question Text"
                          style={{ marginBottom: "18px", paddingLeft: "30px" }}
                          minRows={2}
                          maxRows={20}
                          multiline={true}
                          value={ques.title}

                          variant="filled"
                          onChange={(e) => {
                            handleQuestionValue(e.target.value, i);
                          }}
                        />
                      </div>



                      <div style={{ width: "100%" }}>
                        {ques.options.map((op, j) => (
                          <div key={j} style={{ width: "100%" }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginLeft: "-12.5px",
                                justifyContent: "space-between",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                              }}
                            >
                              <Radio disabled />
                              <TextField
                                fullWidth={true}
                                placeholder="Option text"
                                style={{ marginTop: "5px" }}
                                value={ques.options[j]}
                                onChange={(e) => {
                                  handleOptionValue(e.target.value, i, j);
                                }}
                              />

                              <IconButton
                                aria-label="delete"
                                onClick={() => {
                                  removeOption(i, j);
                                }}
                              >
                                <CloseIcon />
                              </IconButton>
                            </div>

                            <div></div>
                          </div>
                        ))}
                      </div>

                      {ques.options.length < 4 ? (
                        <div>
                          <FormControlLabel
                            disabled
                            control={<Radio />}
                            label={
                              <Button
                                size="small"
                                onClick={() => {
                                  addOption(i);
                                }}
                                style={{
                                  textTransform: "none",
                                  marginLeft: "-5px",
                                }}
                              >
                                Add Option
                              </Button>
                            }
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      <br></br>
                      <Select
                        fullWidth={true}
                        placeholder="Answer"
                        style={{ marginTop: "5px" }}
                        onChange={(e) => {
                          setOptionAnswer(e.target.value, i);
                        }}
                      >
                        {
                          ques.options.map((option, index) => {
                            return <MenuItem value={index}>{option}</MenuItem>
                          })
                        }
                      </Select>
                      <br></br>

                      <Typography variant="body2" style={{ color: "grey" }}>
                        Maximum 4 Options
                      </Typography>

                    </div>
                  </AccordionDetails>

                  <Divider />

                  <AccordionActions>


                    <Button size="small" onClick={() => { addAnswer(i) }} style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}>       <FcRightUp style={{ border: "2px solid #4285f4", padding: "2px", marginRight: "8px" }} /> Answer key</Button>


                    {/**
                       Answer Key Action Form
                       
                        */}
                    <IconButton
                      aria-label="View"
                      onClick={() => {
                        showAsQuestion(i);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton
                      aria-label="Copy"
                      onClick={() => {
                        copyQuestion(i);
                      }}
                    >
                      <FilterNoneIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />

                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        deleteQuestion(i);
                      }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>

                    <IconButton aria-label="Image">
                      <MoreVertIcon />
                    </IconButton>
                  </AccordionActions>

                </Accordion>
              </div>
            </div>
          </div>
        )}

      </Draggable>
    ));
  }

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

                      <TextField
                        id="name_Title_Form"
                        type="text"
                        fullWidth={true}

                        placeholder="Unitied Document"
                        defaultValue={"Unitied Document"}
                        onChange={(e) => { setFormTitle(e.target.value) }}
                      />
                    </Typography>
                    <Typography variant="subtitle1"
                      style={{

                        width: "100%"
                      }}
                    >
                      <TextField
                        fullWidth={true}
                        placeholder="Form Description"
                        onChange={(e) => { setFormDescription(e.target.value) }}
                      />
                    </Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </Grid>

          <Grid style={{ paddingTop: "10px" }}>
            <div>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {questionsUI()}

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <div>
                <Button
                  variant="contained"
                  onClick={addMoreQuestionField}
                  endIcon={<AddCircleIcon />}
                  style={{ margin: "5px" }}
                >
                  Add Question{" "}
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "15px" }}
                  endIcon={<SaveIcon />}
                  onClick={saveQuestions}
                >
                  Save Questions{" "}
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}
export default QuestionsTab;
