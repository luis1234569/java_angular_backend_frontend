package trabajos.seguridad.feature.person;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("persons")
public class Person {

    @Id
    @Column ("person_id")
   private long personId;
   private String comment;
   private boolean yesno;
   private Timestamp datecreate;
   private Timestamp dateupdate;


}
    