const CONSTANTS = require('./constants')
const randomIntFromInterval = (min, max) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
}

const resultdb = (statusCode, data = null) => {
  return {
    statusCode: statusCode,
    data: data
  };
}

const apiSuccessRes = (req, res, message = CONSTANTS.DATA_NULL, data = CONSTANTS.DATA_NULL, code = CONSTANTS.ERROR_CODE_ZERO, error = CONSTANTS.ERROR_FALSE, token) => {
  return res.status(200).json({
    message: message,
    code: code,
    error: error,
    data: data,
    token: token
  });
}

const apiErrorRes = (req, res, message = CONSTANTS.DATA_NULL, data = CONSTANTS.DATA_NULL, code = CONSTANTS.ERROR_CODE_ONE, error = CONSTANTS.ERROR_TRUE) => {
  return res.status(200).json({
    message: message,
    code: code,
    error: error,
    data: data
  });
}

const htmlCodeTermAndCondition = () => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                        <html xmlns="http://www.w3.org/1999/xhtml">
                        <head>
                          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                          <meta name="viewport" content="width=device-width, initial-scale=1" />
                          <title>OTP Email</title>
                          <!-- Designed by https://github.com/kaytcat -->
                          <!-- Header image designed by Freepik.com -->
                          <style type="text/css">
                          /* Take care of image borders and formatting */
                          img { max-width: 600px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
                          a img { border: none; }
                          table { border-collapse: collapse !important; }
                          #outlook a { padding:0; }
                          .ReadMsgBody { width: 100%; }
                          .ExternalClass {width:100%;}
                          .backgroundTable {margin:0 auto; padding:0; width:100% !important;}
                          table td {border-collapse: collapse;}
                          .ExternalClass * {line-height: 115%;}
                          /* General styling */
                          td {
                            font-family: Arial, sans-serif;
                          }
                          body {
                            -webkit-font-smoothing:antialiased;
                            -webkit-text-size-adjust:none;
                            width: 100%;
                            height: 100%;
                            color: #6f6f6f;
                            font-weight: 400;
                            font-size: 18px;
                          }
                          h1 {
                            margin: 10px 0;
                          }
                          a {
                            color: #27aa90;
                            text-decoration: none;
                          }
                          .force-full-width {
                            width: 100% !important;
                          }
                          .body-padding {
                            padding: 0 75px;
                          }
                          </style>
                          <style type="text/css" media="screen">
                              @media screen {
                                @import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,900);
                                /* Thanks Outlook 2013! */
                                * {
                                  font-family: 'Source Sans Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
                                }
                                .w280 {
                                  width: 280px !important;
                                }
                              }
                          </style>
                          <style type="text/css" media="only screen and (max-width: 480px)">
                            /* Mobile styles */
                            @media only screen and (max-width: 480px) {
                              table[class*="w320"] {
                                width: 320px !important;
                              }
                              td[class*="w320"] {
                                width: 280px !important;
                                padding-left: 20px !important;
                                padding-right: 20px !important;
                              }
                              img[class*="w320"] {
                                width: 250px !important;
                                height: 67px !important;
                              }
                              td[class*="mobile-spacing"] {
                                padding-top: 10px !important;
                                padding-bottom: 10px !important;
                              }
                              *[class*="mobile-hide"] {
                                display: none !important;
                              }
                              *[class*="mobile-br"] {
                                font-size: 12px !important;
                              }
                              td[class*="mobile-w20"] {
                                width: 20px !important;
                              }
                              img[class*="mobile-w20"] {
                                width: 20px !important;
                              }
                              td[class*="mobile-center"] {
                                text-align: center !important;
                              }
                              table[class*="w100p"] {
                                width: 100% !important;
                              }
                              td[class*="activate-now"] {
                                padding-right: 0 !important;
                                padding-top: 20px !important;
                              }
                            }
                          </style>
                        </head>
                        <body  offset="0" class="body" style="padding:0; margin:0; display:block; background:#eeebeb; -webkit-text-size-adjust:none" bgcolor="#eeebeb">
                        <table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%">
                          <tr>
                            <td align="center" valign="top" style="background-color:#eeebeb" width="100%">
                            <center>
                              <table cellspacing="0" cellpadding="0" width="600" class="w320">
                                <tr>
                                  <td align="center" valign="top">
                                  <table cellspacing="0" cellpadding="0" width="100%" style="background-color:#3bcdb0;">
                                    <tr>
                                      <td style="text-align: center;">
                                        <a href="#"><img class="w320" width="311" height="83" src="#" alt="company logo" ></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="background-color:#3bcdb0;">
                                        <table cellspacing="0" cellpadding="0" width="100%">
                                          <tr>
                                            <td style="font-size:40px; font-weight: 600; color: #ffffff; text-align:center;" class="mobile-spacing">
                                            <div class="mobile-br">&nbsp;</div>
                                              Welcome to Visionex.io
                                            <br>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style="font-size:24px; text-align:center; padding: 0 75px; color:#6f6f6f;" class="w320 mobile-spacing">
                                              <br>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                  <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#ffffff" >
                                    <tr>
                                      <td style="background-color:#ffffff;">
                                        <table cellspacing="0" cellpadding="0" width="100%">
                                        <tr>
                                          <td style="font-size:24px; text-align:center;" class="mobile-center body-padding w320">
                                          <br>
                                  Email Verification:
                                          </td>
                                        </tr>
                                      </table>
                                      <table cellspacing="0" cellpadding="0" class="force-full-width">
                                        <tr>
                                          <td width="75%" class="">
                                            <table cellspacing="0" cellpadding="0" class="w320 w100p"><br>
                                              <tr>
                                                <td class="mobile-center activate-now" style="font-size:17px; text-align:center; padding: 0 75px; color:#6f6f6f;" >
                                                 Dear ,
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                        <table cellspacing="0" cellpadding="0" width="100%">
                                        <tr>
                                          <td style="text-align:left; font-size:13px;" class="mobile-center body-padding w320">
                                          <br>                            We're really excited for you to join our community!
                                                     You're just one click away from activate your account.
                                      let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {

  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
}  <br>
                                      let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {
  let taskMetaData = () => {
    console.log("alskdjfalsdkfj")
    let task = [];
    for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
      let subtask = [];
      // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
      //   subtask.push({
      //     "taskId": index,
      //     "subTaskId": j,
      //     "subTaskStatus": false,
      //     "subTaskName": "Task " + index
      //   })
      // }
      task.push({
        "taskId": index,
        "taskStatus": false,
        "taskName": "Task " + index,
      })
    }
    return task;
  }
  let subTaskMetaData = (taskId) => {
  
    let subtask = [];
    for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
      subtask.push({
        "taskId": taskId,
        "subTaskId": j,
        "subTaskStatus": false,
        "subTaskName": "SubTask " + j
      })
    }
    return subtask;
  }
  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
}    </td>
                                      let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {

  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
}  </tr>
                                      let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {

  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,let taskMetaData = () => {
        console.log("alskdjfalsdkfj")
        let task = [];
        for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
          let subtask = [];
          // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
          //   subtask.push({
          //     "taskId": index,
          //     "subTaskId": j,
          //     "subTaskStatus": false,
          //     "subTaskName": "Task " + index
          //   })
          // }
          task.push({
            "taskId": index,
            "taskStatus": false,
            "taskName": "Task " + index,
          })
        }
        return task;
      }
      let subTaskMetaData = (taskId) => {
      
        let subtask = [];
        for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
          subtask.push({
            "taskId": taskId,
            "subTaskId": j,
            "subTaskStatus": false,
            "subTaskName": "SubTask " + j
          })
        }
        return subtask;
      }
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
}</table>
                                      <table style="margin:0 auto;" cellspacing="0" cellpadding="10" width="100%">
                                        <tr>
                                          <td style="text-align:center; margin:0 auto;">
                                          <br>
                                            <div>
                                                  <div href="http://"
                                                style="background-color:#f5774e;color:#ffffff;display:inline-block;font-family:'Source Sans Pro', Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:45px;text-align:center;text-decoration:none;width:180px;-webkit-text-size-adjust:none;"><a style="color:#ffffff" >Activate Now!</a></div>
                                             </div>
                                            <br>
                                          </td>
                                        </tr>
                                     let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {

  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
} </table>
                                     let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {

  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
} <table cellspacing="0" cellpadding="0" width="100%">
                                     let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {

  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
}   <tr>
                                     let taskMetaData = () => {
  console.log("alskdjfalsdkfj")
  let task = [];
  for (let index = 1; index <= CONSTANTS.TASK_COUNT_FOR_LOOP; index++) {
    let subtask = [];
    // for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    //   subtask.push({
    //     "taskId": index,
    //     "subTaskId": j,
    //     "subTaskStatus": false,
    //     "subTaskName": "Task " + index
    //   })
    // }
    task.push({
      "taskId": index,
      "taskStatus": false,
      "taskName": "Task " + index,
    })
  }
  return task;
}
let subTaskMetaData = (taskId) => {

  let subtask = [];
  for (let j = 1; j <= CONSTANTS.SUB_TASK_COUNT_FOR_LOOP; j++) {
    subtask.push({
      "taskId": taskId,
      "subTaskId": j,
      "subTaskStatus": false,
      "subTaskName": "SubTask " + j
    })
  }
  return subtask;
}     <td style="text-align:left; font-size:13px;" class="mobile-center body-padding w320">
                                          <br>
                                          <strong>Please Note : </strong><br>
                                  1. Do not share your credentials or otp with anyone on email.<br>
                                  2. Wallet never asks you for your credentials or otp.<br>
                                  3. Always create a strong password and keep different passwords for different websites.<br>
                                  4. Ensure you maintain only one account on wallet to enjoy our awesome services.<br><br><br>
                                          </td>
                                        </tr>
                                      </table>
                                      <table cellspacing="0" cellpadding="0" width="100%">
                                        <tr>
                                          <td style="text-align:left; font-size:13px;" class="mobile-center body-padding w320">
                                          <br>
                                            If you have any questions regarding Visionex.io please read our FAQ or use our support form wallet eamil address). Our support staff will be more than happy to assist you.<br><br>
                                          </td>
                                        </tr>
                                      </table>
                                       <table cellspacing="0" cellpadding="0" width="100%">
                                        <tr>
                                          <td style="text-align:left; font-size:13px;" class="mobile-center body-padding w320">
                                          <br>
                                          <b>Regards,</b><br>
                                           Visionex.io team<br>Thank you<br><br><br>
                                          </td>
                                        </tr>
                                      </table>
                                      <table cellspacing="0" cellpadding="0" bgcolor="#363636"  class="force-full-width">
                                        <tr>
                                          <td style="color:#f0f0f0; font-size: 14px; text-align:center; padding-bottom:4px;"><br>
                                            © 2017 All Rights Reserved Visionex.io
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="color:#27aa90; font-size: 14px; text-align:center;">
                                            <a href="#">View in browser</a> | <a href="#">Contact</a> | <a href="#">Unsubscribe</a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-size:12px;">
                                            &nbsp;
                                          </td>
                                        </tr>
                                      </table>
                                      </td>
                                    </tr>
                                  </table>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            </td>
                          </tr>
                        </table>
                        </body>
                        </html>`
}

module.exports = {
  resultdb: resultdb,
  apiSuccessRes: apiSuccessRes,
  apiErrorRes: apiErrorRes,
  randomIntFromInterval: randomIntFromInterval,
  htmlCodeTermAndCondition: htmlCodeTermAndCondition,
};