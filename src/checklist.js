import { configuration } from "./config.js"

const SAVE_KEY = "save";

function setup_header(container, config) {
    container.innerHTML = `
    <h1>${config.name}</h1>
    <p>${config.description}</p>
    <button data-click="reset-button">Reset</button>`
}

function setup_list(container, config) {

    container.innerHTML = "";
    let num_id = 0;
    let step_index = 0;

    const step_list = document.createElement("div");

    container.appendChild(step_list);

    config.steps.forEach((step) => {
        const step_container = document.createElement("div");
        step_container.dataset.stepIndex = step_index++;
        step_list.appendChild(step_container);

        step_container.innerHTML = `
        <h3>${step.name}</h3>`;

        num_id = setup_step_options(step_container, step.options, num_id);

    });
}

function setup_step_options(container, options, num_id) {
    options.forEach((option, index) => {

        const option_container = document.createElement("div");
        option_container.classList.add("field");
        container.appendChild(option_container);

        let checked = "";
        if (option.selected) {
            option_container.classList.add("hide");
            checked = `checked`;
        }
        option_container.innerHTML = `
        <div class="field-header" data-option-index="${index}" data-click="toggle-item">
            <input type="checkbox" id="${num_id}" ${checked}>
            <label for="${num_id}">${option.name}</label>
        </div>`;

        if (option.description.length) {
            const description_container = document.createElement("div");
            description_container.classList.add("field-description");
            option_container.appendChild(description_container);

            setup_description(description_container, option.description)
        }

        num_id++;
    });

    return num_id
}

function setup_description(container, description_items) {

    description_items.forEach((item) => {

        if (item.hasOwnProperty("p")) {
            const p = document.createElement("p");
            p.innerHTML = item.p;
            container.appendChild(p);
        } else if (item.hasOwnProperty("code")) {
            const code = document.createElement("code");
            code.innerHTML = item.code;
            container.appendChild(code);
        } else if (item.hasOwnProperty("note")) {
            const p = document.createElement("p");
            p.classList.add("note");
            p.innerHTML = "Note: " + item.note;
            container.appendChild(p);
        } else if (item.hasOwnProperty("a")) {
            const a = document.createElement("a");
            a.innerHTML = item.a.name;
            a.href = item.a.link;
            a.target = "_blank";
            container.appendChild(a);
        } else if (item.hasOwnProperty("raw")) {
            const p = document.createElement("p");
            p.innerHTML = item.raw;
            container.appendChild(p);
        }
    });
}

function get_local_storage(key) {
    const info = window.localStorage.getItem(key);
    if (info) {
        const data = JSON.parse(info);
        return data.data;
    }

    return null;
}

function set_local_storage(key, object) {
    const data = {
        data: object
    };

    localStorage.setItem(key, JSON.stringify(data));
}

function has_local_storage(key) {
    return localStorage.getItem(key) !== null;
}

function setup_click_actions(actions) {
    actions.forEach((action) => {
        const targets = document.querySelectorAll(`[data-click="${action.name}"]`);

        if (!targets || targets.length == 0) {
            console.log(`No target element with the name: "${action.name}" could be found`)
            return;
        }

        targets.forEach((target) => {
            target.addEventListener("mouseup", action.action, false);
        })
    });
}

//What has c done to me :P
(function main() {

    const config = has_local_storage(SAVE_KEY) ? get_local_storage(SAVE_KEY) : configuration;

    if (!config || configuration.api_version !== config.api_version) {
        console.log("Reset");
        localStorage.clear();
        alert("Configuration is not valid. Page will be reset");
        window.location.reload();
    }

    set_local_storage(SAVE_KEY, config);
    try {
        const header_element = document.querySelector("header");
        if (!header_element)
            return console.log("Target header element is not present.");

        const list_body_element = document.querySelector("div#list-body");
        if (!list_body_element)
            return console.log("Target list element is not present.");


        setup_header(header_element, config);
        setup_list(list_body_element, config);

        setup_click_actions([
            {
                name: "reset-button",
                action: (e) => {
                    console.log("Reset");
                    localStorage.clear();
                    window.location.reload();
                    return false;
                }
            }, {
                name: "toggle-item",
                action: (e) => {

                    const step_index = e.target.closest("[data-step-index]").dataset.stepIndex;
                    const option_index = e.target.closest("[data-option-index]").dataset.optionIndex;

                    const field_header = e.target.closest(`[data-option-index]`);
                    const input = field_header.querySelector(`input`);

                    const c = get_local_storage(SAVE_KEY);
                    let selected = c.steps[step_index].options[option_index].selected;

                    if (!selected) {
                        selected = true
                        input.checked = false;
                    }
                    else {
                        selected = false;
                        input.checked = true;
                    }
                    c.steps[step_index].options[option_index].selected = selected;
                    field_header.parentElement.classList.toggle("hide");

                    console.log(`STATE:\t Step: ${step_index} Option: ${option_index} -> ${c.steps[step_index].options[option_index].selected}`);

                    set_local_storage(SAVE_KEY, c);
                }
            }]);
    } catch (e) {
        alert("The state is invalid and will be reset to defaults.");
        localStorage.clear();
        window.location.reload();
    }

})()