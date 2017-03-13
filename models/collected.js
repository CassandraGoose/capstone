var Model = require('objection').Model;

/**
 * @extends Model
 * @constructor
 */
function collected_images() {
  Model.apply(this, arguments);
}

Model.extend(collected_images);
module.exports = collected_images;

// Table name is the only required property.
collected_images.tableName = 'collected_images';

// Optional JSON schema. This is not the database schema! Nothing is generated
// based on this. This is only used for validation. Whenever a model instance
// is created it is checked against this schema. http://json-schema.org/.
collected_images.jsonSchema = {
  type: 'object',

  properties: {
    id: {
      type: 'integer'
    },
    user_id: {
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
collected_images.relationMappings = {
  user_id: {
    relation: Model.HasManyRelation,
    modelClass: people,
    join: {
      from: 'collected_images.id',
      to: 'people.id'
    }
  },
  mood: {
    relation: Model.HasManyRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one.
    modelClass: mood,
    join: {
      from: 'collected_images.id',
      to: 'mood.id'
    }
  },
  color: {
    relation: Model.HasManyRelation,
    modelClass: color,
    join: {
      from: 'collected_images.id',
      to: 'color.id'
    }
  },
  keyword: {
    relation: Model.HasManyRelation,
    modelClass: keyword,
    join: {
      from: 'collected_images.id',
      to: 'color.id'
    }
  }
};
