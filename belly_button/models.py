from .app import db


class BellyButton(db.Model):
    __tablename__ = 'belly_button'

    otu_id = db.Column(db.Float, primary_key=True)
    otu_label = db.Column(db.String(64))
    sample_value = db.Column(db.Float)

    def __repr__(self):
        return '<Belly %r>' % (self.name)
