export default function json2html(data) {

    const headers = ["Name", "Age", "Gender"];


    let html = `<table data-user="aryan.gorde4@gmail.com">\n`;
    html += "  <thead>\n";
    html += "    <tr>";


    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr>\n";
    html += "  </thead>\n";
    html += "  <tbody>\n";


    data.forEach(row => {
        html += "    <tr>";
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += "</tr>\n";
    });

    html += "  </tbody>\n";
    html += "</table>";

    return html;
}
