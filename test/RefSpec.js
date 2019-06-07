const CustomAgile = require('../built/index');

const { Ref } = CustomAgile;
const { expect } = require('chai');

describe('Ref', () => {
    describe('#isRef', () => {
        it('should handle invalid refs', () => {
            expect(Ref.isRef(6786876)).to.equal(false);
            expect(Ref.isRef({})).to.equal(false);
            expect(Ref.isRef(false)).to.equal(false);
            expect(Ref.isRef('yar')).to.equal(false);
            expect(Ref.isRef(null)).to.equal(false);
            expect(Ref.isRef()).to.equal(false);
            expect(Ref.isRef('/defect')).to.equal(false);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/1.32/defect/abc.js')).to.equal(false);
            expect(Ref.isRef('')).to.equal(false);
        });

        it('should handle basic refs', () => {
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/1.17/builddefinition/81177657')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/1.17/builddefinition/81177657.js')).to.equal(true);
            expect(Ref.isRef('/builddefinition/81177657.js')).to.equal(true);
            expect(Ref.isRef('/builddefinition/81177657')).to.equal(true);

            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v3.0/builddefinition/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v3.0/builddefinition/3493b0493ea74c9abf78069487936c13')).to.equal(true);
            expect(Ref.isRef('/builddefinition/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal(true);
            expect(Ref.isRef('/builddefinition/3493b0493ea74c9abf78069487936c13')).to.equal(true);
        });

        it('should handle permission refs', () => {
            expect(Ref.isRef('/projectpermission/1234u5678p1')).to.equal(true);
            expect(Ref.isRef('/projectpermission/1234u5678p1.js')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v2.0/projectpermission/1234u5678p1.js')).to.equal(true);
            expect(Ref.isRef('/workspacepermission/1234u5678w1')).to.equal(true);
            expect(Ref.isRef('/workspacepermission/1234u5678w1.js')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v2.0/workspacepermission/1234u5678w1.js')).to.equal(true);

            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal(true);
            expect(Ref.isRef('/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal(true);
            expect(Ref.isRef('/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal(true);
        });

        it('should handle built-in refs', () => {
            expect(Ref.isRef('/typedefinition/-1234.js')).to.equal(true);
            expect(Ref.isRef('/typedefinition/-1234')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v2.0/typedefinition/-1234')).to.equal(true);
            expect(Ref.isRef('/typedefinition/-1234/attributes')).to.equal(true);
        });

        it('should handle objects', () => {
            expect(Ref.isRef({ _ref: '/defect/12345' })).to.equal(true);
            expect(Ref.isRef({ _ref: 'https://rally1.rallydev.com/slm/webservice/v2.0/defect/12345' })).to.equal(true);

            expect(Ref.isRef({ _ref: 'https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13' })).to.equal(true);
            expect(Ref.isRef({ _ref: 'https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13' })).to.equal(true);
            expect(Ref.isRef({ _ref: '/defect/3493b049-3ea7-4c9a-bf78-069487936c13' })).to.equal(true);
            expect(Ref.isRef({ _ref: '/defect/3493b0493ea74c9abf78069487936c13' })).to.equal(true);
        });

        it('should handle dynatype refs', () => {
            expect(Ref.isRef('/portfolioitem/feature/1234')).to.equal(true);
            expect(Ref.isRef('/portfolioitem/feature/1234.js')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/1.32/portfolioitem/feature/1234')).to.equal(true);
            expect(Ref.isRef('http://rally1.rallydev.com/slm/webservice/1.32/portfolioitem/feature/1234.js')).to.equal(true);
            expect(Ref.isRef('/portfolioitem/feature/1234/children.js')).to.equal(true);
            expect(Ref.isRef('/portfolioitem/feature/1234/children')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234/children')).to.equal(true);

            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal(true);
            expect(Ref.isRef('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal(true);
            expect(Ref.isRef('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal(true);
            expect(Ref.isRef('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal(true);
        });
    });

    describe('#getRelative', () => {
        it('should handle non-refs', () => {
            expect(!Ref.getRelative('blah'));
            expect(!Ref.getRelative(''));
            expect(!Ref.getRelative(null));
            expect(!Ref.getRelative({}));
            expect(!Ref.getRelative({ _ref: null }));
        });

        it('should handle basic refs', () => {
            expect(Ref.getRelative('/defect/1234')).to.equal('/defect/1234');
            expect(Ref.getRelative('/defect/1234.js')).to.equal('/defect/1234');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/1.32/defect/1234')).to.equal('/defect/1234');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/1.32/defect/1234.js')).to.equal('/defect/1234');

            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13.js')).to.equal('/defect/3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13')).to.equal('/defect/3493b0493ea74c9abf78069487936c13');
            expect(Ref.getRelative('/defect/3493b049-3ea7-4c9a-bf78-069487936c13.js')).to.equal('/defect/3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getRelative('/defect/3493b0493ea74c9abf78069487936c13')).to.equal('/defect/3493b0493ea74c9abf78069487936c13');
        });

        it('should handle dynatype refs', () => {
            expect(Ref.getRelative('/portfolioitem/feature/1234')).to.equal('/portfolioitem/feature/1234');
            expect(Ref.getRelative('/portfolioitem/feature/1234.js')).to.equal('/portfolioitem/feature/1234');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234')).to.equal('/portfolioitem/feature/1234');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234.js')).to.equal('/portfolioitem/feature/1234');

            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b0493ea74c9abf78069487936c13')).to.equal('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13');
            expect(Ref.getRelative('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getRelative('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13')).to.equal('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13');
        });

        it('should handle dynatype collection refs', () => {
            expect(Ref.getRelative('/portfolioitem/feature/1234/children')).to.equal('/portfolioitem/feature/1234/children');
            expect(Ref.getRelative('/portfolioitem/feature/1234/children.js')).to.equal('/portfolioitem/feature/1234/children');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234/children')).to.equal('/portfolioitem/feature/1234/children');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234/children.js')).to.equal('/portfolioitem/feature/1234/children');

            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children');
            expect(Ref.getRelative('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children');
            expect(Ref.getRelative('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children');
        });

        it('should handle collection refs', () => {
            expect(Ref.getRelative('/defect/1234/tasks')).to.equal('/defect/1234/tasks');
            expect(Ref.getRelative('/defect/1234/tasks.js')).to.equal('/defect/1234/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/defect/1234/tasks')).to.equal('/defect/1234/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/defect/1234/tasks.js')).to.equal('/defect/1234/tasks');

            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('/defect/3493b0493ea74c9abf78069487936c13/tasks');
            expect(Ref.getRelative('/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks');
            expect(Ref.getRelative('/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('/defect/3493b0493ea74c9abf78069487936c13/tasks');
        });

        it('should handle built-in refs', () => {
            expect(Ref.getRelative('/typedefinition/-1234')).to.equal('/typedefinition/-1234');
            expect(Ref.getRelative('/typedefinition/-1234.js')).to.equal('/typedefinition/-1234');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/typedefinition/-1234.js')).to.equal('/typedefinition/-1234');
            expect(Ref.getRelative('/typedefinition/-1234/attributes')).to.equal('/typedefinition/-1234/attributes');
            expect(Ref.getRelative('/typedefinition/-1234/attributes.js')).to.equal('/typedefinition/-1234/attributes');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/typedefinition/-1234/attributes.js')).to.equal('/typedefinition/-1234/attributes');
        });

        it('should support various wsapi versions', () => {
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/defect/1234/tasks')).to.equal('/defect/1234/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/1.43/defect/1234/tasks')).to.equal('/defect/1234/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/x/defect/1234/tasks')).to.equal('/defect/1234/tasks');

            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('/defect/3493b0493ea74c9abf78069487936c13/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('/defect/3493b0493ea74c9abf78069487936c13/tasks');
        });

        it('should handle permissions refs', () => {
            expect(Ref.getRelative('/projectpermission/1234u5678p1')).to.equal('/projectpermission/1234u5678p1');
            expect(Ref.getRelative('/projectpermission/1234u5678p1.js')).to.equal('/projectpermission/1234u5678p1');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/projectpermission/1234u5678p1.js')).to.equal('/projectpermission/1234u5678p1');
            expect(Ref.getRelative('/workspacepermission/1234u5678w1')).to.equal('/workspacepermission/1234u5678w1');
            expect(Ref.getRelative('/workspacepermission/1234u5678w1.js')).to.equal('/workspacepermission/1234u5678w1');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v2.0/workspacepermission/1234u5678w1.js')).to.equal('/workspacepermission/1234u5678w1');

            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1');
            expect(Ref.getRelative('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1');
            expect(Ref.getRelative('/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1');
            expect(Ref.getRelative('/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1');
        });
    });

    describe('#getType', () => {
        it('should handle non-refs', () => {
            expect(!Ref.getType('blah'));
            expect(!Ref.getType(''));
            expect(!Ref.getType(null));
            expect(!Ref.getType({}));
            expect(!Ref.getType({ _ref: null }));
        });

        it('should handle basic refs', () => {
            expect(Ref.getType('/defect/1234')).to.equal('defect');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v2.0/defect/1234.js')).to.equal('defect');

            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13')).to.equal('defect');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('defect');
            expect(Ref.getType('/defect/3493b0493ea74c9abf78069487936c13')).to.equal('defect');
            expect(Ref.getType('/defect/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('defect');
        });

        it('should handle dynatype refs', () => {
            expect(Ref.getType('/portfolioitem/feature/1234')).to.equal('portfolioitem/feature');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234.js')).to.equal('portfolioitem/feature');

            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('portfolioitem/feature');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b0493ea74c9abf78069487936c13')).to.equal('portfolioitem/feature');
            expect(Ref.getType('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('portfolioitem/feature');
            expect(Ref.getType('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13')).to.equal('portfolioitem/feature');
        });

        it('should handle dynatype collection refs', () => {
            expect(Ref.getType('/portfolioitem/feature/1234/children')).to.equal('portfolioitem/feature');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234/children.js')).to.equal('portfolioitem/feature');

            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal('portfolioitem/feature');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal('portfolioitem/feature');
            expect(Ref.getType('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal('portfolioitem/feature');
            expect(Ref.getType('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal('portfolioitem/feature');
        });

        it('should handle collection refs', () => {
            expect(Ref.getType('/defect/1234/tasks')).to.equal('defect');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v2.0/defect/1234/tasks.js')).to.equal('defect');

            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('defect');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('defect');
            expect(Ref.getType('/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('defect');
            expect(Ref.getType('/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('defect');
        });

        it('should handle built-in refs', () => {
            expect(Ref.getType('/typedefinition/-1234')).to.equal('typedefinition');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v2.0/typedefinition/-1234.js')).to.equal('typedefinition');
        });

        it('should handle permissions refs', () => {
            expect(Ref.getType('/projectpermission/1234u5678p1')).to.equal('projectpermission');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v2.0/projectpermission/1234u5678p1.js')).to.equal('projectpermission');
            expect(Ref.getType('/workspacepermission/1234u5678w1')).to.equal('workspacepermission');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v2.0/workspacepermission/1234u5678w1.js')).to.equal('workspacepermission');

            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/projectpermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('projectpermission');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/projectpermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('projectpermission');
            expect(Ref.getType('/projectpermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('projectpermission');
            expect(Ref.getType('/projectpermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('projectpermission');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('workspacepermission');
            expect(Ref.getType('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('workspacepermission');
            expect(Ref.getType('/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('workspacepermission');
            expect(Ref.getType('/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('workspacepermission');
        });
    });

    describe('#getId', () => {
        it('should handle non-refs', () => {
            expect(!Ref.getId('blah'));
            expect(!Ref.getId(''));
            expect(!Ref.getId(null));
            expect(!Ref.getId({}));
            expect(!Ref.getId({ _ref: null }));
        });

        it('should handle basic refs', () => {
            expect(Ref.getId('/defect/1234')).to.equal('1234');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v2.0/defect/1234.js')).to.equal('1234');

            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13')).to.equal('3493b0493ea74c9abf78069487936c13');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getId('/defect/3493b0493ea74c9abf78069487936c13')).to.equal('3493b0493ea74c9abf78069487936c13');
            expect(Ref.getId('/defect/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
        });

        it('should handle dynatype refs', () => {
            expect(Ref.getId('/portfolioitem/feature/1234')).to.equal('1234');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234.js')).to.equal('1234');

            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b0493ea74c9abf78069487936c13')).to.equal('3493b0493ea74c9abf78069487936c13');
            expect(Ref.getId('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getId('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13')).to.equal('3493b0493ea74c9abf78069487936c13');
        });

        it('should handle dynatype collection refs', () => {
            expect(Ref.getId('/portfolioitem/feature/1234/children')).to.equal('1234');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/feature/1234/children.js')).to.equal('1234');

            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal('3493b0493ea74c9abf78069487936c13');
            expect(Ref.getId('/portfolioitem/feature/3493b049-3ea7-4c9a-bf78-069487936c13/children')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getId('/portfolioitem/feature/3493b0493ea74c9abf78069487936c13/children')).to.equal('3493b0493ea74c9abf78069487936c13');
        });

        it('should handle collection refs', () => {
            expect(Ref.getId('/defect/1234/tasks')).to.equal('1234');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v2.0/defect/1234/tasks.js')).to.equal('1234');

            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('3493b0493ea74c9abf78069487936c13');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
            expect(Ref.getId('/defect/3493b0493ea74c9abf78069487936c13/tasks')).to.equal('3493b0493ea74c9abf78069487936c13');
            expect(Ref.getId('/defect/3493b049-3ea7-4c9a-bf78-069487936c13/tasks')).to.equal('3493b049-3ea7-4c9a-bf78-069487936c13');
        });

        it('should handle built-in refs', () => {
            expect(Ref.getId('/typedefinition/-1234')).to.equal('-1234');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v2.0/typedefinition/-1234.js')).to.equal('-1234');
        });

        it('should handle permissions refs', () => {
            expect(Ref.getId('/projectpermission/1234u5678p1')).to.equal('1234u5678p1');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v2.0/projectpermission/1234u5678p1.js')).to.equal('1234u5678p1');
            expect(Ref.getId('/workspacepermission/1234u5678w1')).to.equal('1234u5678w1');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v2.0/workspacepermission/1234u5678w1.js')).to.equal('1234u5678w1');

            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/projectpermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/projectpermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1');
            expect(Ref.getId('/projectpermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1');
            expect(Ref.getId('/projectpermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1');
            expect(Ref.getId('https://rally1.rallydev.com/slm/webservice/v3.0/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1');
            expect(Ref.getId('/workspacepermission/1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1')).to.equal('1637adf808304a489420fb5bdb8575d6u3497d0433ea74c2cbf78069847936c13w1');
            expect(Ref.getId('/workspacepermission/1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1')).to.equal('1637adf8-0830-4a48-9420-fb5bdb8575d6u3497d043-3ea7-4c2c-bf78-069847936c13w1');
        });
    });
});
