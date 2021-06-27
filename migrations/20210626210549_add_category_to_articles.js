exports.up = function (knex) {
  return knex.schema.table('articles', table => {
    table.string('category', 128);
  })
};

exports.down = function (knex) {
  return knex.schema.table('articles', table => {
    table.dropColumn('category');
  })
};
