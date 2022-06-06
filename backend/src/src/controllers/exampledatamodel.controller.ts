import ExampleDataModel from "../models/exampledatamodel";

    export const example_data = function(req: any, res: any) {
        const exampleDataModel = ExampleDataModel.build({parameter: "something"});
        console.log(exampleDataModel);
        const response = exampleDataModel.save();
        response.then(
            (r) => {res.send(r);}
        ).catch(
            (e) => {res.send(`something went wrong!\n${e}`);}
        )
    }
