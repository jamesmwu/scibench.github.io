function generateTable() {
	var data = score_table; // The variable from model_scores.js

	var table = '<table class="js-sort-table" id="results">';
	table += `<tr>
        <td class="js-sort"><strong>Model</strong></td>
        <td class="js-sort"><strong>atkins</strong></td>
        <td class="js-sort"><strong>chemmc</strong></td>
        <td class="js-sort"><strong>quan</strong></td>
        <td class="js-sort-number"><strong>matter</strong></td>
        <td class="js-sort-number"><strong>fund</strong></td>
        <td class="js-sort-number"><strong>class</strong></td>
        <td class="js-sort-number"><strong>thermo</strong></td>
        <td class="js-sort-number"><strong>diff</strong></td>
        <td class="js-sort-number"><strong>stat</strong></td>
        <td class="js-sort-number"><strong>calc</strong></td>
        <td class="js-sort-number"><strong>Avg</strong></td>
    </tr>`;

	// Iterate through the outer sections
	for (var section in data) {
		// Add section title row
		table += `<tr class="section-title"><td colspan="13">${section}</td></tr>`;

		// Iterate through the inner models within each section
		for (var modelName in data[section]) {
			var entry = data[section][modelName];

			table += '<tr>';
			table += `<td><b>${modelName}</b></td>`;
			table += `<td>${entry.atkins}</td>`;
			table += `<td>${entry.chemmc}</td>`;
			table += `<td>${entry.quan}</td>`;
			table += `<td>${entry.matter}</td>`;
			table += `<td>${entry.fund}</td>`;
			table += `<td>${entry.class}</td>`;
			table += `<td>${entry.thermo}</td>`;
			table += `<td>${entry.diff}</td>`;
			table += `<td>${entry.stat}</td>`;
			table += `<td>${entry.calc}</td>`;
			table += `<td>${entry.Avg}</td>`;
			table += '</tr>';
		}
	}

	table += '</table>';
	document.getElementById('textbook_leaderboard').innerHTML = table;
}

// Call the function when the window loads
window.onload = generateTable;
