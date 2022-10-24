import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="album"
export default class extends Controller {
    static targets = ["input"]
        // static targets = ["button", "message"]

    // static values = {
    //     correct: String,
    // }
    static values = {
        // clicked: { type: Boolean, default: false }
        clicked: { type: String, default: "" },
        user: String,
        userId: Number

    }


    connect() {
        console.log("If you can see that, the controller is connected.");
        // this.clickedValue = "";
    }

    createAlbum2021(event) {
        event.preventDefault();
        console.log("2021/2022");
        const amount = current_user.albums.count
        console.log(amount);
        // <% current_user.albums.create(season: "2021") %>
    }

    // connect() {
    //     createAlbum2020(event);
    // }
    createAlbum2020(event) {
        // event.preventDefault();
        // const button = this.buttonTarget
        console.log("2020/2021");
        // button = '<% current_user.albums.create(season: "2021") %>'
        // const quizResultMessage = document.getElementById("quiz-result-message");
        // quizResultMessage.innerText = '<% current_user.albums.create(season: "2021") %>';
        // document.getElementById('tasks').insertAdjacentHTML('beforebegin', '<% current_user.albums.create(season: "2021") %>')
        // document.getElementById("quiz-result-message").insertAdjacentHTML('afterbegin', '<% current_user.albums.create(season: "2021") %>')
        // document.getElementById("quiz-result-message").insertAdjacentText('afterbegin', '<% current_user.albums.create(season: "2021") %>')
        // document.querySelector('#quiz-result-message').insertAdjacentText('afterbegin', '<% current_user.albums.create(season: "2021") %>')
        // document.getElementById("quiz-result-message").textContent = '<% current_user.albums.create(season: "2021") %>';
        // document.getElementById("quiz-result-message").innerText = '<% current_user.albums.create(season: "2021") %>';
        // this.inputTarget.innerText = '<% current_user.albums.create(season: "2021") %>'
        // this.inputTarget.textContent = '<% current_user.albums.create(season: "2021") %>'
        // this.inputTarget.insertAdjacentHTML('afterbegin', '<% current_user.albums.create(season: "2021") %>')
        // const html = `<%= ApplicationController.renderer.render inline: 'something' %>`
        // this.inputTarget.insertAdjacentHTML('afterbegin', `<%= ApplicationController.renderer.render inline: 'current_user.albums.create(season: "2021")' %>`)
        // this.inputTarget.insertAdjacentHTML('afterbegin', `<%= ApplicationController.renderer.render template: 'current_user.albums.create(season: "2021")' %>`)
        // this.inputTarget.innerHTML += '<% current_user.albums.create(season: "2021") %>';
        // this.inputTarget.innerHTML = '';
        // const html = `<% current_user.albums.create(season: "2021") %>`
        // this.inputTarget.insertAdjacentHTML('beforeend', html);
        // @cocktails = User.Albums.Create(season: "2021")
        // this.inputTarget.insertAdjacentHTML('afterbegin', `<% current_user.albums.create(season: "2021") %>`)
        // const html = '<% current_user.albums.create(season: "2021") %>'
        // this.inputTarget.appendChild(html);
        // const html = '<p>Test</p>';
        // this.inputTarget.insertAdjacentHTML('afterbegin', html);
        // this.inputTarget.insertAdjacentHTML('afterbegin', '<p>Test</p>');
        // const template = this.inputTarget;
        // const firstClone = template.content.cloneNode(true);
        // container.appendChild(firstClone);
        // const x = new Boolean(true);
        // document.createElement()
        // this.textContent = '<% current_user.albums.create(season: "2021") %>';
        // const fragment = document.createDocumentFragment();
        // const li = fragment
        //     .appendChild(document.createElement('div'));
        // div.textContent = '<% current_user.albums.create(season: "2021") %>';
        // document.body.appendChild(fragment);
        // let div = document.createElement("div");
        // div.append('<% current_user.albums.create(season: "2021") %>');
        // let div = this.createElement("div");
        // div.append('<% current_user.albums.create(season: "2021") %>');
        // this.inputTarget.append('<% current_user.albums.create(season: "2021") %>');
        // this.inputTarget.clickedValue = true;
        // this.clickedValue = true;
        // !this.clickedValue;
        // this.inputTarget = true;
        // this.clickedValue = true;
        // get testi() { return true }
        // this.inputTarget.textContent = true
        // this.inputTarget.textContent = this.data.get('close')
        // this.inputTarget.innerHTML = '<% current_user.albums.create(season: "2021") %>';
        // this.clickedValue = '<% current_user.albums.create(season: "2021") %>';
        // this.data.get("clickedValue")
        // this.inputTarget.innerText = '<% current_user.albums.create(season: "2021") %>';
        // current_user_my.albums.create(season: "2021")
        // document.getElementById('message').innerHTML = nil;
        // this.inputTarget.textContent = '<span><% current_user.albums.create(season: "2021") %></span>'
        // this.inputTarget.insertAdjacentHTML('afterbegin', '<span><% current_user.albums.create(season: "2021") %></span>');
        // this.inputTarget.innerText = '<span><% current_user.albums.create(season: "2021") %></span>';
        // document.getElementById("myspan").textContent = '<% current_user.albums.create(season: "2021") %>';
        // document.getElementById("myspan").innerHTML = '<% current_user.albums.create(season: "2021") %>';
        // span = document.getElementById("myspan");
        // txt = document.createTextNode('<% current_user.albums.create(season: "2021") %>');
        // span.appendChild(txt);
        // $("#myspan").text('<% current_user.albums.create(season: "2021") %>');
        // set count(value) {
        //     this.data.set("count", value)
        //     this.outputTarget.textContent = this.count
        // }
        // const value = '<% current_user.albums.create(season: "2021") %>'
        //const value = computeId()
        // Object.defineProperty(this, "id", { value })
        // return value
        // this.channel = createConsumer().subscriptions.create({ channel: "ChatroomChannel", id: this.chatroomIdValue }, { received: data => this.#insertMessageAndScrollDown(data) })
        // Album.create({ season: "2021" })
        // User.albums.create({ season: "2021" })
        // Album.create({ season: "2021" }).where({ user_id: current_user.id })
        // document.write('<html><body><h2>HTML</h2></body></html>');
        // document.write('<% current_user.albums.create(season: "2021") %>');
        // const newNode = document.createElement('div');
        // newNode.appendChild(document.createTextNode('<% current_user.albums.create(season: "2021") %>'));
        // https://www.w3schools.com/jsref/met_document_createdocumentfragment.asp
        // const newtext = document.createTextNode('<% current_user.albums.create(season: "2021") %>');
        // const p1 = document.getElementById("p1");
        // p1.appendChild(newtext);

        // const tag_id = document.getElementById('p1');
        // tag_id.innerHTML = '<% current_user.albums.create(season: "2021") %>';
        // const dFrag = document.createDocumentFragment();
        // const div = document.createElement('div');
        // div.textContent = '<% current_user.albums.create(season: "2021") %>';
        // dFrag.appendChild(div);
        // // Create a href attribute:
        // const att = document.createAttribute("href");

        // // Set the value of the href attribute:
        // att.value = "https://www.w3schools.com";

        // // Add the href attribute to an element:
        // document.getElementById('p1').setAttributeNode(att);
        // this.inputTarget.innerText = '<script type="text/ruby"><% current_user.albums.create(season: "2021") %></script>';
        // this.inputTarget.append('<script type="application/ruby"><% current_user.albums.create(season: "2021") %></script>');
        // this.inputTarget.insertAdjacentHTML('afterbegin', '<script type="application/ruby"><% current_user.albums.create(season: "2021") %></script>')
        // new Album(season => "2021")
        // this.setValue(this.clickedValue = 'true');
        // User.user.albums.create(season => "2021")
        // new User.user.albums.create({ season: "2021" })
        User.userIdValue.albums.create(season => "2021")



    }
    createAlbum2019(event) {
        event.preventDefault();
        console.log("2019/2020");
    }
}