const express = require('express')
const mangaLog = express()
const port = 3001
let readLog = {}

mangaLog.use(express.json())

//mangaLog:POST
mangaLog.post('/mangaLog', (req, res) => { 

    readLog = req.body

    //パラメータが空だった時の処理
    if (!(readLog.name && readLog.text)) { 
        return res.json({
            "res": false,
            "error": "inavalid parameter"
        })
    }

    res.json({
        "res": true,
        "mangaLog": readLog
    })
})

//mangaLog:GET
mangaLog.get('/mangaLog', (req,res) => { 
    
    res.json({
      "res": true,
        "mangaLog": [
          readLog
      ]
    });

})
//server立ち上がりの確認
mangaLog.listen(port, () => {
    console.log("App listening at http://localhost:3001");
})
