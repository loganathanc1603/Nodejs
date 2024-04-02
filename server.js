// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/Customers', createProxyMiddleware({ target: 'https://services.odata.org/v2/northwind/northwind.svc/', changeOrigin: true }));
// app.listen(3000);


const express = require('express');
const app = express();
const port =process.env.PORT || 5000;

app.get("/User", (req, res) => {
    res.json({ FullName: 'Loganathan Chinnasamy' });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});