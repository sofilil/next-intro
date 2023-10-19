//Skrevet en liten forklaring i README også :)

const quiz = [
    {
      "title": "Hvilket rammeverk for testing av javascript skal vi bruke i kurset?",
      "answers": [
        { "answer": "Jasmine" },
        {
          "answer": "React"
        },
        {
          "answer": "Mocha"
        },
        {
          "answer": "Jest",
          "correct": true
        }
      ],
      "helper": {
        "text": "Logoen er skoen til en joker."
      }
    },

    {
        "title": "Hva bruker vi 'describe' til i testing? ",
        "answers": [
          { "answer": "Beskrive testen" },
          {
            "answer": "Beskrive koden"
          },
          {
            "answer": "Kommentere i koden"
          },
          {
            "answer": "Gruppere flere relaterte tester",
            "correct": true
          }
        ],
        "helper": {
          "text": "Gjør det mer effektivt."
        }
      },

      {
        "title": "Hvilke type tester har man?",
        "answers": [
          { "answer": "Online" },
          {
            "answer": "Offline"
          },
          {
            "answer": "Individuelle"
          },
          {
            "answer": "Automatiserte og manuelle",
            "correct": true
          }
        ],
        "helper": {
          "text": "Noe gjør man selv, noe gjøres av seg selv."
        }
      },

      {
        "title": "Hva er en Mock-funksjon?",
        "answers": [
          { "answer": "En funksjon som gjør narr av noe" },
          {
            "answer": "En lure-funksjon"
          },
          {
            "answer": "En funksjon som ikke gjør noen ting"
          },
          {
            "answer": "En simulert funksjon som logger alle kall",
            "correct": true
          }
        ],
        "helper": {
          "text": "Brukes til å etterligne oppførsel."
        }
      }
  ]


export default function handler(req, res) {
  if (req.method === 'POST') {
    // Tar imot data som sendes med forespørselen
    const data = req.body;

    // Legger til data i quiz-listen vår
    quiz.push(data);

    // Sender status 201 (Created) og den nye oppdaterte listen
    res.status(201).json({ success: true, data: quiz });
  } else {
    // Dette er for GET-forespørsler
    res.status(200).json({ success: true, data: quiz });
  }
}
