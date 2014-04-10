
/*
 * GET home page.
 */

exports.index = function(req, res){
	var page = req.params.cur_page;
	res.render(page, { title: 'Express' });
};
