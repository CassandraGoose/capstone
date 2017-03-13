var Model = require('objection').Model;
var collected_images = require('./collected')

/**
 * @extends Model
 * @constructor
 */
function people() {
  Model.apply(this, arguments);
}

Model.extend(people);
module.exports = people;

// Table name is the only required property.
Person.tableName = 'Person';

// Optional JSON schema. This is not the database schema! Nothing is generated
// based on this. This is only used for validation. Whenever a model instance
// is created it is checked against this schema. http://json-schema.org/.
Person.jsonSchema = {
  type: 'object',
  required: ['username', 'password'],

  properties: {
    id: {
      type: 'integer'
    },
    username: {
      type: 'string',
      minLength: 1,
      maxLength: 20
    },
    password: {
      type: 'string',
      minLength: 4,
      maxLength: 255
    },
    email: {
      type: 'string',
      minLength: 1,
      maxLength: 255
    },
  }
};

// This object defines the relations to other models.
people.relationMappings = {
  collected_images: {
    relation: Model.HasManyRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one.
    modelClass: collected_images,
    join: {
      from: 'people.id',
      to: 'collected_images.user_id'
    }
  }
};
