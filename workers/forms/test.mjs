import worker from "./src/index.js";

const env = {
  ALLOWED_ORIGINS: "https://sagessenumerique.ca",
  DRY_RUN: "true",
  TO_EMAIL: "phil@sagessenumerique.ca,p.h.i.l@live.ca",
  FROM_EMAIL: "forms@sagessenumerique.ca",
  SES_REGION: "us-east-1",
  SES_FROM_EMAIL: "forms@sagessenumerique.ca"
};

const request = new Request("https://sagessenumerique.ca/api/forms/submit", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "origin": "https://sagessenumerique.ca",
    "accept": "application/json"
  },
  body: JSON.stringify({
    form: "sagessenumerique-contact",
    name: "Test User",
    email: "test@example.com",
    subject: "Worker smoke test",
    message: "This is a smoke test submission."
  })
});

const response = await worker.fetch(request, env, {});
const body = await response.json();

if (response.status !== 200 || body.ok !== true || body.delivery !== "dry-run") {
  console.error({ status: response.status, body });
  process.exit(1);
}

const blocked = await worker.fetch(new Request("https://sagessenumerique.ca/api/forms/submit", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "origin": "https://not-sagessenumerique.example"
  },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    message: "This should be blocked."
  })
}), env, {});

if (blocked.status !== 403) {
  console.error({ status: blocked.status, body: await blocked.text() });
  process.exit(1);
}

console.log("forms worker smoke tests passed");
