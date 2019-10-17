import { API } from "../../../../config";
import axios from "axios";

export async function loadAdmin(id, setData) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  };
  const endpoint = `${API}/admin/get`;
  const body = {
    _id: id
  };
  try {
    const res = await axios.post(endpoint, body, config);
    if (res.status === 200) {
      const fullName = res.data.data.name.split(" ");
      const firstName = fullName.shift();
      setData(prev => ({
        ...prev,
        showDeleteButton: true,
        title: "Update Administrator",
        name: firstName,
        lastName: fullName.join(" "),
        email: res.data.data.email,
        submitAction: evt => {
          updateAdmin(evt, id);
        },
        isLoading: false,
        requirePassword: false
      }));
    }
  } catch (err) {
    window.location.replace("/404");
  }
}

export async function deleteAdmin(id) {
  const endpoint = `${API}/admin/delete`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    data: {
      _id: id
    }
  };
  try {
    const res = await axios.delete(endpoint, config);
    if (res.status === 200) {
      alert("Successfully deleted");
      window.location.replace("/admin/dashboard");
    }
  } catch (err) {
    alert("An error occurred. Try again later");
  }
}

export async function createNewAdmin(evt) {
  const name = [
      evt.target["merchantName"].value,
      evt.target["merchantLastName"].value
    ].join(" "),
    email = evt.target["merchantEmail"].value,
    password1 = evt.target["merchantPassword"].value,
    password2 = evt.target["merchantPasswordConfirm"].value;

  if (password1 !== password2) {
    alert("Passwords must match");
    evt.target["merchantPasswordConfirm"].focus();
  } else {
    const endpoint = `${API}/admin/create`;
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };
    const data = {
      name: name,
      email: email,
      password: password1
    };
    try {
      const res = await axios.post(endpoint, data, config);
      if (res.status === 200) {
        alert("Admin created correctly");
        window.location.pathname = "admin/dashboard";
      } else {
        alert("An error occurred. Try again later");
        window.location.reload();
      }
    } catch (err) {
      alert("An error occurred. Try again later");
    }
  }
}

export async function updateAdmin(evt, id) {
  const password1 = evt.target["merchantPassword"].value,
    password2 = evt.target["merchantPasswordConfirm"].value;

  if (password1 !== password2) {
    alert("Passwords must match");
    evt.target["merchantPasswordConfirm"].focus();
  } else {
    console.log("Updating...");
    const name = [
        evt.target["merchantName"].value,
        evt.target["merchantLastName"].value
      ].join(" "),
      email = evt.target["merchantEmail"].value,
      endpoint = `${API}/admin/update`,
      config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json"
        }
      };
    const data = {
      _id: id,
      name: name,
      email: email
    };
    if (password1 !== "") data["newpassword"] = password1;

    try {
      const res = await axios.put(endpoint, data, config);
      console.log(res);
      if (res.status === 200) window.location.reload();
      else alert("An error occurred: ");
    } catch (err) {
      console.log(err);
      alert("An error occurred, try again later");
    }
  }
}