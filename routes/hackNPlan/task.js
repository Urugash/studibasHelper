const express = require('express');
const router = express.Router();
const axios = require('axios');

async function sendDiscordTaskCreated (projectId, category, boardId, workItemId) {
    let data = {
        content: "Une tâche a été créée sur le hacknplan : \n https://app.hacknplan.com/p/"+projectId+"/kanban?categoryId="+category+"&boardId="+boardId+"&taskId="+workItemId
    }
  
    try {
      const axiosResponse = await axios.post("https://discord.com/api/webhooks/988251044129685585/B08xMfQ7jSeBaQUNubJTQCNLJZcYkMIk5HuyuWtXK_UwjZ0XLCUXRNa209TtvWv8xv8U", data)
      console.log("Request successful!")
    } catch (error) {
        console.log(error);
      if (error.response) {
        console.log(error.reponse.status)
      } else {
        console.log(error.message)
      }
    }
  }
  

router.post('/taskCreated', (request, response) => {
    const userId = request.body.User.id;
    const workItemId = request.body.WorkItemId;
    const title = request.body.title;
    const categoryId = request.body.Category.CategoryId;
    const boardId = request.body.Board.BoardId;
    const projectId = request.body.ProjectId;
    const isStory = request.body.isStory;
    sendDiscordTaskCreated(projectId,categoryId,boardId,workItemId);
    response.send('okidoki');
})


router.get('/fakeHackNPlanWebHook', (request, response) => {
    const data = {
        User : {
            id : 100
        },
        WorkItemId : 200,
        title: "Titre",
        Category : {
            CategoryId: 300
        },
        Board : {
            BoardId: 400
        },
        ProjectId : 500,
        isStory: true
    }
    try {
       const axiosResponse = axios.post("http://localhost:8080/taskCreated", data);
       console.log('Request réussite');
       response.send('youhou');
    } catch (error) {
        console.log(error);
      if (error.response) {
        console.log(error.reponse.status)
      } else {
        console.log(error.message)
      }
    }
})

/*
https://discord.com/api/webhooks/988251044129685585/B08xMfQ7jSeBaQUNubJTQCNLJZcYkMIk5HuyuWtXK_UwjZ0XLCUXRNa209TtvWv8xv8U
POST
{
    content: 'blablatest",
}
*/

module.exports = router;