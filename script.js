const user_image_container = document.getElementById('img-container-left')
const computer_image_container = document.getElementById('img-container-right')
const message_container = document.getElementById('message')

let user_score_board = document.getElementById('player_score')
let computer_score_board = document.getElementById('computer_score')

var userscore = 0;
var computerscore = 0;

const message_board = document.getElementById('text-board')
var  restartButton = document.getElementById('restart-button')

var img_player = document.createElement('img')
var img_computer = document.createElement('img')


const options = document.getElementsByClassName('options')

const choices = ['stone','paper','scissors']



var clicked_choice = ''
for (const element of options) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if(userscore < 5 && computerscore < 5) {
            const object = element.dataset.name
            clicked_choice = object
            
            img_player.src = `images/${object}.png`

            var computer_choice = choices[Math.floor(Math.random() * choices.length)];
            img_computer.src = `images/${computer_choice}.png`
            

            if(clicked_choice && computer_choice){
                user_image_container.appendChild(img_player)
                computer_image_container.appendChild(img_computer)

                if(clicked_choice === computer_choice){
                    message_board.innerText = 'TIE'
                }else if (
                    (clicked_choice === 'stone' && computer_choice === 'scissors') ||
                    (clicked_choice === 'paper' && computer_choice === 'stone') ||
                    (clicked_choice === 'scissors' && computer_choice === 'paper')
                ){
                    message_board.innerText = '1pt for Player'
                    userscore+=1
                    user_score_board.innerText = userscore
                }else{
                    message_board.innerText = '1pt for Computer'
                    computerscore+=1
                    computer_score_board.innerText = computerscore
                }
            }
            if(userscore == 5 || computerscore == 5){
                message_container.classList.add('active')
                if(userscore > computerscore){
                    message_board.innerText = 'You Won'
                }else {
                    message_board.innerText = 'Computer Won'
                }
            }else if(userscore > 0 || computerscore > 0){
                restartButton.style.display = 'block'
            }else {
                restartButton.style.display = 'none'
            }


            

            restartButton.addEventListener('click', function(e){
                e.preventDefault()
                userscore = 0;
                user_score_board.innerText = userscore
                computerscore = 0;
                computer_score_board.innerText = computerscore

                message_board.innerText = ''

                img_computer.remove();
                img_player.remove();

                message_container.classList.remove('active')
            })
        }
    });
}
