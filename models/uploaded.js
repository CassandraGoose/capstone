var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
function uploaded_images() {
  Model.apply(this, arguments);
}

Model.extend(uploaded_images);
module.exports = uploaded_images;

// Table name is the only required property.
uploaded_images.tableName = 'uploaded_images';

// Optional JSON schema. This is not the database schema! Nothing is generated
// based on this. This is only used for validation. Whenever a model instance
// is created it is checked against this schema. http://json-schema.org/.
uploaded_images.jsonSchema = {
  type: 'object',

  properties: {
    id: {
      type: 'integer'
    },
    moodId: {
      type: 'integer'
    },
    colorId: {
      type: 'integer'
    },
    keywordId: {
      type: 'integer'
    },
    popularity: {
      type: 'integer'
    }
  }
};

// This object defines the relations to other models.
uploaded_images.relationMappings = {
  mood: {
    relation: Model.HasManyRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one.
    modelClass: mood,
    join: {
      from: 'uploaded_images.id',
      to: 'mood.id'
    }
  },
  color: {
    relation: Model.HasManyRelation,
    modelClass: color,
    join: {
      from: 'uploaded_images.id',
      to: 'color.id'
    }
  },
  keyword: {
    relation: Model.HasManyRelation,
    modelClass: keyword,
    join: {
      from: 'uploaded_images.id',
      to: 'color.id'
    }
  }
};
