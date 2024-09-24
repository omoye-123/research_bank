const websiteInput = document.getElementById("website-inp");
const linkInput = document.getElementById("link-inp");
const descriptionInput = document.getElementById("website-description");
const buttonResource = document.getElementById("btn-resource");
const deleteIcon = document.getElementById("delete-icon");
const closeIcon = document.getElementById("close-icon");
const dataContainer = document.getElementById("data");
const formCon = document.getElementById("modal-con");

buttonResource.addEventListener("click", function (e) {
  formCon.style.display = "flex";
});

closeIcon.addEventListener("click", function (e) {
  formCon.style.display = "none";
});

deleteIcon.addEventListener("click", function (e) {
  formCon.style.display = "none";
});

const dataArray = [];

formCon.addEventListener("submit", function (e) {
  e.preventDefault();

  let websiteFromForm = websiteInput.value;
  let linkFromForm = linkInput.value;
  let descriptionFromForm = descriptionInput.value;

  const websiteRecords = {
    postTitle: websiteFromForm,
    postLink: linkFromForm,
    postDescription: descriptionFromForm,
  };

  dataArray.push(websiteRecords);

  displayData(websiteRecords);

  formCon.style.display = "none";
  formCon.reset();
});

function displayData(info) {
  const newDataContainer = document.createElement("div");
  newDataContainer.classList.add("data");

  const titleDeleteIcon = document.createElement("div");
  titleDeleteIcon.classList.add("titledelete-icon");

  const titleResource = document.createElement("div");
  titleResource.classList.add("title");
  const heading = document.createElement("h4");
  heading.textContent = info.postTitle;
  titleResource.appendChild(heading);

  const deleteOfIcon = document.createElement("div");
  deleteOfIcon.classList.add("delete-icon");
  const deleteIconElement = document.createElement("i");
  deleteIconElement.classList.add("fa-regular fa-trash-can");
  deleteOfIcon.appendChild(deleteIconElement);
  deleteOfIcon.addEventListener("click", function () {
    newDataContainer.remove();
  });

  titleDeleteIcon.appendChild(descriptionInput);
  titleDeleteIcon.appendChild(deleteOfIcon);

  const linkCon = document.createElement("div");
  linkCon.classList.add("website-link");
  const link = document.createElement("p");
  link.textContent = data.postLink;
  linkCon.appendChild(link);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-info");
  const description = document.createElement("p");
  description.textContent = data.postDescription;
  descriptionContainer.appendChild(description);

  newDataContainer.appendChild(titleDeleteIcon);
  newDataContainer.appendChild(linkCon);
  newDataContainer.appendChild(descriptionContainer);

  document.querySelector(".empty-con").appendChild(newDataContainer);
}
